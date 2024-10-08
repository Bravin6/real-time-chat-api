// userController.js

const auth = require('../middlewares/authMiddleware'); // Adjust if needed

// Dummy database for example purposes
const users = []; // This should ideally be a database model

// Function to register a user
exports.registerUser = (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are provided
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).json({ error: 'Username already taken.' });
    }

    // Add the new user to the "database"
    users.push({ username, password }); // In a real app, hash the password!

    res.status(201).json({ message: 'User registered successfully.' });
};

// Function to login a user
exports.loginUser = (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are provided
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Find the user in the "database"
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) { // In a real app, compare hashed passwords
        return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Generate a token (just a placeholder for this example)
    const token = 'sample-jwt-token'; // Use a library like jsonwebtoken in a real app

    res.status(200).json({ message: 'User logged in successfully.', token });
};

