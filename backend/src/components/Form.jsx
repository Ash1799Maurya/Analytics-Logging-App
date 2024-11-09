import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        access_time: '',
        access_date: '',
        employee_name: '',
        algo_status: 'OFF',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/access-logs', formData);
        onFormSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="time" name="access_time" value={formData.access_time} onChange={handleChange} required />
            <input type="date" name="access_date" value={formData.access_date} onChange={handleChange} required />
            <input type="text" name="employee_name" value={formData.employee_name} onChange={handleChange} required />
            <select name="algo_status" value={formData.algo_status} onChange={handleChange}>
                <option value="ON">Energy Saving Mode ON</option>
                <option value="OFF">Energy Saving Mode OFF</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
