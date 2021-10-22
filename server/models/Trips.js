const { Schema, model } = require('mongoose');

const tripsSchema = new Schema({
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
          activities: [
              {
                  name: {
                      type: String,
                  },
              },
          ],
      },
  ],
  dateCreated: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
  }
});

const Trips = model('Trips', tripsSchema);

module.exports = Trips;
