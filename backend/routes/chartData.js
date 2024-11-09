const express = require('express');
const ChartData = require('../models/ChartData');
const router = express.Router();

// Fetch all chart data
router.get('/', async (req, res) => {
    try {
        const data = await ChartData.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
