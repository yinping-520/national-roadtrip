const { Schema, model } = require('mongoose');

const itinerarySchema = new Schema({
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
    activities: [
        {
            name: {
                type: String,
            },
        },
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

const Itinerary = model('Itinerary', itinerarySchema);

module.exports = Itinerary;