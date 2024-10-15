require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connectDB = require('./config/db'); // Import DB connection
const chatRoutes = require('./routes/chatRoutes'); // Import chat routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
const Message = require('./models/Message'); // Message model
const { addUser, removeUser, getUser } = require('./services/websocketService'); // WebSocket service

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

connectDB();

app.use(express.json());

app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoom);
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinRoom', (userId) => {
    addUser(userId, socket.id);
    console.log(`User ${userId} joined`);
  });

  
  socket.on('chatMessage', async (msg) => {
    const { userId, roomId, message } = msg;

  
    try {
      const newMessage = new Message({
        userId,
        roomId,
        message,
      });
      await newMessage.save();

 
      io.emit('message', { userId, roomId, message });
    } catch (error) {
      console.error('Error saving message:', error.message);
    }
  });

  socket.on('disconnect', () => {
    removeUser(socket.id);
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

