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
    activities: [{
           type: String,
        }
    ],

    website: {
        type: String,
    },
    lat:{
        type: Number,
    },
    long:{
        type: Number,
    },



});

const Park = model('Park', parkSchema);

module.exports = Park;