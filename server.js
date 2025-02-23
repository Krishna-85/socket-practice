const app = require('./src/app')
const server = require('http').createServer(app);

const io = require('socket.io')(server);


io.on('connection', socket => {

    socket.on("message",(data)=>{
        console.log(data)
        io.emit("chat-message", data)
    })

   console.log("User connected")
});
 


server.listen('4001',()=>{
    console.log("server is running on port 4001")
})