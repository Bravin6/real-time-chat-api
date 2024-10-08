// Importing modules
require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connectDB = require('./config/db'); // Import DB connection
const chatRoutes = require('./routes/chatRoutes'); // Import chat routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
const { addUser, removeUser, sendMessage } = require('./services/websocketService'); // WebSocket service
const dotenv = require('dotenv');
const websocketService = require('./services/websocketService');

// Load environment variables
dotenv.config();

// Initialize app and server
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// API routes
app.use('/api/chat', chatRoutes); // Chat API routes
app.use('/api/users', userRoutes); // User API routes

// WebSocket logic
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinRoom', (userId) => {
    addUser(userId, socket.id);
    console.log(`User ${userId} joined`);
  });

  socket.on('chatMessage', (msg) => {
    sendMessage(io, msg.userId, msg.message);
  });

  socket.on('disconnect', () => {
    removeUser(socket.id);
    console.log('User disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

