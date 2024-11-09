const mongoose = require('mongoose');

const AccessLogSchema = new mongoose.Schema({
    access_time: { type: String, required: true },
    access_date: { type: Date, required: true },
    employee_name: { type: String, required: true },
    algo_status: { type: String, required: true }
});

module.exports = mongoose.model('AccessLog', AccessLogSchema);
