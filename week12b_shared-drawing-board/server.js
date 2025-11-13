import express from "express";
import http from "http";
import { Server } from "socket.io";

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("🟢 New user connected:", socket.id);

  socket.on("draw", (data) => {
    // rebroadcast to everyone except the sender
    socket.broadcast.emit("draw", data);
  });

  // when a client clears their canvas, notify other clients to clear as well
  socket.on("clear", () => {
    // rebroadcast clear to everyone except the sender
    socket.broadcast.emit("clear");
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

server.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${3000}`));

