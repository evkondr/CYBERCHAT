const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const mongoose = require('mongoose')
const server = http.createServer(app)
const { Server } = require('socket.io')
const config = require('./config')
const moment = require('moment')
const Users = require('./models/user')
const Messages = require('./models/messages')
//Routes
const authRouter = require('./routes/authRouter')
const chatRouter = require('./routes/chatRouter')
const usersRouter = require('./routes/usersRouter')
const uploadRouter = require('./routes/uploadRouter')
const io = new Server(server, {
    cors: {
        origin: "http://localhost:9000",
        methods: ["GET", "POST"]
      }
})
//Middlewares
app.use(cors(), express.json())
app.use('/uploads/', express.static('uploads'));

app.use('/api/auth/', authRouter)
app.use('/api/users/', usersRouter)
app.use('/api/upload/', uploadRouter)
app.use('/api/', chatRouter)
app.get('/', (req, res) => {
    res.send('hello')
})
//socket
io.on('connection', (socket) => {
    console.log('a user connected ' + socket.id);
    socket.on('message_in', async (msg) => {
        const {userID, text} = msg
        const {name, surname} = await Users.findById(userID, 'name surname').exec();
        const date = `${moment().format('L')} ${moment().format('LT')}`;
        const author = `${name} ${surname}`
        const message = await Messages.create({author, text, date});
        io.emit('message_out', message)
    })

  });
  async function connectDB(){
    try{
        await mongoose.connect(config.dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          console.log('DB connected')
    }catch(e){
        console.log(e)
    }
    
}
connectDB()
server.listen(3000, () => {
    console.log('Server is running on port 3000')
})