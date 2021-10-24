const { Schema, model } = require('mongoose');

const itinerary = new Schema({

    parks: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Park',
        },
      ]


});

const Itinerary = model('Itinerary', itinerary);

module.exports = Itinerary;