// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const connectDatabase = require('./config/database');  // Assuming you have a separate config/database.js file

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Test route to check if the server is working
app.get('/', (req, res) => {
    res.send('Server is running and connected to MongoDB!');
});

// Connect to the MongoDB database
connectDatabase().then(() => {
    // If successful, start the server
    const PORT = process.env.PORT || 5002;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});
