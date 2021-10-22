const db = require('../config/connection');
const { Itinerary } = require('../models');
const parkSeeds = require('./parkSeeds.json');

db.once('open', async () => {
  try {
    await Itinerary.deleteMany({});
    await Itinerary.create(parkSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
