[200~# Real-Time Chat Application API

## Project Description
This project is a **Real-Time Chat API** built using **Node.js**, **Express.js**, and **Socket.IO** for handling real-time WebSocket communication. The goal of the project is to create a fully functional backend for a chat application where users can send and receive messages instantly.

This API provides the core backend functionality, including user authentication, message storage, and real-time communication using WebSockets.

---

## Features
- Real-time messaging with WebSocket (Socket.IO)
- REST API for managing chat rooms, messages, and users
- User authentication (JWT)
- MongoDB for data storage (messages, users)
- Real-time event broadcasting to multiple clients
- Well-structured code with MVC architecture

---

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - WebSocket library for real-time communication
- **MongoDB** - Database for storing messages and users
- **JWT (JSON Web Tokens)** - For secure user authentication
- **Mongoose** - MongoDB ODM for easier interaction with the database

---

## Installation Instructions

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- **Node.js** (v14.x or higher)
- **MongoDB** (running locally or use a cloud instance)
- **Git** (for version control)

### Steps to Install
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/real-time-chat-api.git
   cd real-time-chat-api

Install the dependencies:
npm install
Create a .env file in the root directory and add the following:

PORT=3000
MONGO_URI=mongodb://localhost:27017/realtimechat
JWT_SECRET=your_jwt_secret_key

Start the server:
npm start
Testing the API locally: You can test the API by sending HTTP requests using tools like Postman or Insomnia. By default, the API will be running at:
http://localhost:3000

API Endpoints
Authentication
POST /auth/register - Register a new user
POST /auth/login - Login to get a JWT token
Messages
GET /messages - Get all messages (optional: filter by room)
POST /messages - Send a new message (WebSocket emits will broadcast in real-time)
WebSocket Events
Connection - Establish a WebSocket connection for real-time messaging
Message Event - chatMessage (Emitted when a user sends a message)
Usage
Sending HTTP Requests
You can interact with the API using tools like Postman or curl. For example, to register a new user:

curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "JohnDoe", "password": "password123"}'
Once you have a valid JWT, include it in the Authorization header to interact with protected endpoints, like sending a message:

curl -X POST http://localhost:3000/messages \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{"username": "JohnDoe", "message": "Hello, World!"}'
WebSocket Connection
To test real-time chat functionality, connect to the WebSocket using Socket.IO-client:

javascript
const socket = io('http://localhost:3000');
socket.emit('chatMessage', { username: 'JohnDoe', message: 'Hello, World!' });
Manual Testing
Use Postman or Insomnia to:

Register a user, log in, and get a JWT token.
Use the JWT token to send messages and get responses in real time using WebSocket.
Running Tests
To run the unit and integration tests, you can use the following command:

npm test
Make sure you have Mocha, Chai, and Supertest installed for your testing environment.

Future Improvements
Add support for multiple chat rooms.
Implement private messaging between users.
Add message persistence with more advanced querying (pagination, search).
Improve security with rate limiting and more comprehensive authentication.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributors
Bravin Masinde (Team member)
Feel free to fork this project, contribute, or reach out if you have any questions!

markdown

### Explanation of the Structure:
- **Project Description**: A brief description of what the project is about and its core functionality.
- **Features**: Highlights the main features of your API.
- **Technologies Used**: Lists the key technologies used in the project.
- **Installation Instructions**: Step-by-step guide on how to set up the project locally.
- **API Endpoints**: Detailed documentation of available API routes.
- **WebSocket Events**: Explanation of WebSocket events for real-time functionality.
- **Usage**: Provides examples for interacting with the API via Postman or curl, and WebSocket.
- **Running Tests**: Explains how to run unit and integration tests.
- **Future Improvements**: Outlines potential future improvements for the API.
- **License**: Information about the project’s license.
- **Contributors**: List of contributors to the project.

This `README.md` serves as a comprehensive guide for both developers and users of the API. 

