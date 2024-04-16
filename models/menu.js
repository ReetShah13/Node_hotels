const e = require('express');
const mongoose = require('mongoose');
const menuItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    taste: {
        type: String,
        enum: ['spicy', 'sweet', 'sour', 'bitter', 'salty','normal'],
        required: true
    },
    isDrink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
         type: [String], 
         default:[]
    },
    num_sales: {    
        type: Number,
        default: 0
    },
    
});

const MenuItem = mongoose.model('MenuItem', menuItemsSchema);
module.exports = MenuItem;