// server/index.js
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Server đang hoạt động!');
  });
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Để dev thì mình cho tất, deploy thì chỉnh lại cho an toàn
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("call-user", (data) => {
    io.to(data.userToCall).emit("receive-call", {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on("answer-call", (data) => {
    io.to(data.to).emit("call-answered", data.signal);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
