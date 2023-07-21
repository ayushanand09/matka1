// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// io.on("connection", (socket) => {
//   console.log("New client connected.");

//   socket.on("message", (data) => {
//     console.log("Received message from client:", data);
//     io.emit("message", data); // Broadcast the message to all connected clients
//   });
// });

// const port = 3001; // Use a different port for the server
// server.listen(port, () => {
//   console.log(`Socket.IO server is running on http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`Room ID: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);

    // console.log(`Message: ${data}`);
    console.log(`Message: ${JSON.stringify(data)}`);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
