const auth = require('../middlewares/authMiddleware');
const Message = require('../models/Message');
exports.sendMessage = async (req, res) => {
  const { message, roomId } = req.body;
  const userId = req.user.id; // Get the user from the token

  if (!message || !roomId) {
    return res.status(400).json({ error: 'Message and Room ID are required.' });
  }

  try {

    const newMessage = await Message.create({
      message,
      roomId,
      userId,
    });

    res.status(200).json({
      success: true,
      data: newMessage,
      message: `Message "${message}" sent by User ${userId} in Room ${roomId}.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
};


