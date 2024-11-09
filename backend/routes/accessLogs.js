const express = require('express');
const AccessLog = require('../models/AccessLog');
const ChartData = require('../models/ChartData');
const router = express.Router();

// Create an access log
router.post('/', async (req, res) => {
    const { access_time, access_date, employee_name, algo_status } = req.body;
    const log = new AccessLog({ access_time, access_date, employee_name, algo_status });

    try {
        await log.save();
        res.status(201).json(log);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
