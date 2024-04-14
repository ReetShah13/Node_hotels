const { add } = require('lodash');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['student', 'manager', 'engineer'],
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },  
    salary: {
        type: Number,
        required: true,
    },
});

// Create a model

const Person = mongoose.model('Person', personSchema);
module.exports = Person;