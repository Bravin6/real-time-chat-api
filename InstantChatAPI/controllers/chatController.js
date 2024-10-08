const auth = require('../middlewares/authMiddleware');

// chatcontroller.js

exports.sendMessage = [auth, (req, res) => {
  const { message, roomId } = req.body;
  const userId = req.user.id; // Get the user from the token

  if (!message || !roomId) {
    return res.status(400).json({ error: 'Message and Room ID are required.' });
  }

  res.status(200).json({
    success: true,
    message: `Message "${message}" sent by User ${userId} in Room ${roomId}.`,
  });
}];

