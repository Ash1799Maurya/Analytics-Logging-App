const mongoose = require('mongoose');

const ChartDataSchema = new mongoose.Schema({
    createdAt: { type: Date, required: true },
    total_kwh: { type: Number, required: true }
});

module.exports = mongoose.model('ChartData', ChartDataSchema);
