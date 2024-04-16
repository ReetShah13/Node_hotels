const mongoose = require('mongoose');
require('dotenv').config();
// Connection to local MongoDB database
//const mongoURL = process.env.MONGODB_URL_LOCAL;

//Connect to mongoDB Atlas
//const mongoURL = 'mongodb+srv://ReetShah:Reetshah13@cluster0.si4z4zt.mongodb.net/'

const mongoURL = process.env.MONGODB_URL;
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
