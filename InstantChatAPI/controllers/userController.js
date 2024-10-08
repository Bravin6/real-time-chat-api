const jwt = require('jsonwebtoken');

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  // Simulate user authentication (in a real app, check credentials from a database)
  if (username === 'testuser' && password === 'password123') {
    const token = jwt.sign({ id: 1, username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({
      success: true,
      message: 'User authenticated successfully.',
      token, // Return the token to the user
    });
  } else {
    res.status(400).json({ error: 'Invalid username or password' });
  }
};

