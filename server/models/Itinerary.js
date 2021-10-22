const { Schema, model } = require('mongoose');

const itinerarySchema = new Schema({
  
  tripDates: [
      {
          startDate: {
              type: Date,
          },
          endDate: {
              type: Date,
          }

      }
  ],
  dateCreated: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
  },
});

const Itinerary = model('Itinerary', itinerarySchema);

module.exports = Itinerary;