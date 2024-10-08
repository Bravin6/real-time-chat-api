const auth = require('../middlewares/authMiddleware');

// chatcontroller.js

// Function to send a message
exports.sendMessage = (req, res) => {
  const { message, roomId } = req.body;
  const userId = req.user.id; // Get the user from the token

  if (!message || !roomId) {
    return res.status(400).json({ error: 'Message and Room ID are required.' });
  }

  // Here, you would typically add the message to your database
  // For example:
  // await Message.create({ message, roomId, userId });

  res.status(200).json({
    success: true,
    message: `Message "${message}" sent by User ${userId} in Room ${roomId}.`,
  });
};

// You might also want to export other functions in the future, like retrieving messages

