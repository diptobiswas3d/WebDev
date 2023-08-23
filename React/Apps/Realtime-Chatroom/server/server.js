const io = require("socket.io")(3001, {
  cors: {
    origin: "*",
  },
});

let users = {};

io.on("connection", (socket) => {
  //   socket.emit("chat-message", "Let's fight a battle!");

  socket.on("new-user", (user) => {
    users[socket.id] = user;
    socket.broadcast.emit("user-connected", user);
  });

  socket.on("send-chat-message", (msg) => {
    // console.log(`${users[socket.id]}: ${msg}`);
    socket.broadcast.emit("chat-message", { user: users[socket.id], msg });
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
  socket.on("typing", (user) => {
    console.log(`${user} is typing`);
    socket.broadcast.emit("user-typing", user);
  });
  socket.on("stop-typing", (user) => {
    socket.broadcast.emit("user-stop-typing", user);
  });
});
