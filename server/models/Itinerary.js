const { Schema, model } = require('mongoose');

const itinerarySchema = new Schema({
  stops: [
      {
          name: {
              type: String,
              required: true,
          },
          address: {
              type: String,
              required: true,
          },
          description: {
              type: String,
          },
          activities: [
              {
                  name: {
                      type: String,
                  },
              },
          ],
      },
  ],
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
  }
});

const Itinerary = model('Itinerary', itinerarySchema);

module.exports = Itinerary;