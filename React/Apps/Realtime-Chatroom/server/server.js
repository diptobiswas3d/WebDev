const io = require("socket.io")(3001, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  //   socket.emit("chat-message", "Let's fight a battle!");

  socket.on("send-chat-message", (msg) => {
    console.log(msg);
    socket.broadcast.emit("chat-message", msg);
  });
});
