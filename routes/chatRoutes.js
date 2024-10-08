const express = require('express');
const chatController = require('../controllers/chatcontroller'); // Ensure the path is correct
const auth = require('../middlewares/authMiddleware'); // Importing middleware if needed
const router = express.Router();

// Route to send a message
router.post('/send', auth, chatController.sendMessage); // Ensure this matches your route structure

module.exports = router;

