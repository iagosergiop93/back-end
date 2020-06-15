const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000;

app.use(express.static("./static"))

app.get("/", (req,res) => {
    res.sendFile("/static/index.html");
});


// Run when client connects
io.on("connection", (socket) => {
    console.log("A user connected");

    socket.emit("message", "Welcome to WebSockets");
});


server.listen(PORT, () => {
    console.log("Listening on Port " + PORT);
    
})