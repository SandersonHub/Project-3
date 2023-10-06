const mongoose = require('mongoose');
const Game = require('../models/Game');

const db = 'mongodb://127.0.0.1:27017/mern-shopping';

// Seed data
const gameSeeds = [
  {
    title: "Halo Infinite",
    platform: "Xbox"
  },
  {
    title: "God of War Ragnarok",
    platform: "PS5"
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch"
  }
  
  //example....addd more games as needed

];

// Connect to the db
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to db');

  // clear games
  return Game.deleteMany({});
})
.then(() => {

  // Insert the seed data
  return Game.insertMany(gameSeeds);
})
.then(data => {
  console.log(data.length + ' inserted!');
  process.exit(0);
})
.catch(err => {
  console.error('there was a problem with seeding the info try again', err);
  process.exit(1);
});
