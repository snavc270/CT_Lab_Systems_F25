// imports our dependecies 
//http creates teh HTTP server and socket.io will handle our bidirectional communication
import express from 'express';
import http from "http"; 
import { Server } from "socket.io"; 

const PORT = 3000; 

const app = express(); 
//creat http server and attach express app to it
const server = http.createServer(app); 
//create socket.io server and attach it to the HTTP server 
const io = new Server(server); 

//tell express to server static files from our public folder
app.use(express.static("public")); 

//listens for new client connecting to the socket
io.on("connection", socket => {
    console.log("User connected: ", socket.id); 

    // listens for a signal event from the client
    socket.on("signal", (data) => {
        console.log("Signal received: ", data); 

        //broadcasts signal to all other connected clients
        socket.broadcast.emit("signal", data); 
    }); 

    // Log when a user disconnects from the server
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start the server and listen on port 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));