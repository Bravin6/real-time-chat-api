let users = {}; // Store users in memory (in production, consider Redis or database)

const addUser = (userId, socketId) => {
  users[userId] = socketId;
};

const removeUser = (socketId) => {
  for (const userId in users) {
    if (users[userId] === socketId) {
      delete users[userId];
      break;
    }
  }
};

const sendMessage = (io, userId, message) => {
  const socketId = users[userId];
  if (socketId) {
    io.to(socketId).emit('chatMessage', message);
  }
};

module.exports = {
  addUser,
  removeUser,
  sendMessage
};

