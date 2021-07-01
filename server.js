const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const mongoose = require('mongoose')
const server = http.createServer(app)
const { Server } = require('socket.io')
const config = require('./config')
//Routes
const authRouter = require('./routes/authRouter')
const chatRouter = require('./routes/chatRouter')
const usersRouter = require('./routes/usersRouter')
const io = new Server(server, {
    cors: {
        origin: "http://localhost:9000",
        methods: ["GET", "POST"]
      }
})

app.use(cors(), express.json())
app.use('/api/auth/', authRouter)
app.use('/api/users/', usersRouter)
app.use('/api/', chatRouter)
app.get('/', (req, res) => {
    res.send('hello')
})
io.on('connection', (socket) => {
    console.log('a user connected ' + socket.id);
    socket.on('message', msg => {
        io.emit('message', msg)
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