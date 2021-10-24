const db = require('../config/connection');
const { User, Park } = require('../models');
const userSeeds = require('./userSeeds.json');
const parkSeeds = require('./parkSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    await Park.deleteMany({});
    await Park.create(parkSeeds);

    console.log("seeded successfully")
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
