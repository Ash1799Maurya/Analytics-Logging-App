require('dotenv').config();  // Make sure dotenv is loaded
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database');

const chartDataRoutes = require('./routes/chartData');
const accessLogRoutes = require('./routes/accessLogs');

const app = express();

// Log the Mongo URI to confirm it's correct
console.log('Mongo URI:', process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/chart-data', chartDataRoutes);
app.use('/api/access-logs', accessLogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
