const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: "http://localhost:9000",
        methods: ["GET", "POST"]
      }
})

app.use(cors())
app.get('/', (req, res) => {
    res.send('hello')
})
io.on('connection', (socket) => {
    console.log('a user connected');
  });
server.listen(3000, () => {
    console.log('Server is running on port 3000')
})