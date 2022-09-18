const io = require("socket.io")(3000, {});

io.on("connection", (socket) => {
  socket.on("send-message", (chatMessage) => {
    socket.broadcast.emit("receive-message", chatMessage);
  });
});
