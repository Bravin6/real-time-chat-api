const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatcontroller');

// Define the route for sending a message
router.post('/send', chatController.sendMessage);

// Define the route for fetching all messages from a specific room
router.get('/messages/:roomId', chatController.getMessages);

module.exports = router;

