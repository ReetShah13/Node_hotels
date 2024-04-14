const mongoose = require('mongoose');
const mongoURL = "mongodb://127.0.0.1:27017/hotels";
// Connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

// Close the database connection
const closeDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed.');
    } catch (err) {
        console.error(err.message);
        // Optionally, handle the error further (e.g., retry connection closing)
    }
};

module.exports = { connectDB, closeDB };
