const mongoose = require('mongoose');


const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://mauryaashvini99:1799Ash@cluster0.4xn7s.mongodb.net/myDatabase?retryWrites=true&w=majority';

const connectDatabase = async () => {
  try {

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

module.exports = connectDatabase;
