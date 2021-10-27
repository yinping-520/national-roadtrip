const { Schema, model } = require('mongoose');

const parkSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    weatherInfo: {
        type: String,
    },
    activities1: [{
           type: String,
    }],
    activities2: [{
        type: String,
    }],
    lat: { 
        type: Number 
    },
    long: { 
        type: Number 
    },

    website: {
        type: String,
    },
    lat:{
        type: Number,
    },
    long:{
        type: Number,
    },
    images:[{
        type: String
    }],



});

const Park = model('Park', parkSchema);

module.exports = Park;