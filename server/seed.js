// const mongoose = require('mongoose');
// require('dotenv').config();
// const Game = require('./models/Game'); 
// const GameConsole = require('./models/GameConsole'); 


// // Seed data
// const gameSeeds = [
//   {
//     title: "Halo Infinite",
//     platform: "Xbox"
//   },
//   {
//     title: "Forza Horizon 5",
//     platform: "Xbox"
//   },
//   {
//     title: "Fable",
//     platform: "Xbox"
//   },
//   {
//     title: "Psychonauts 2",
//     platform: "Xbox"
//   },
//   {
//     title: "Back 4 Blood",
//     platform: "Xbox"
//   },
//   {
//     title: "God of War Ragnarok",
//     platform: "PS5"
//   },
//   {
//     title: "Spider-Man: Miles Morales",
//     platform: "PS5"
//   },
//   {
//     title: "Ratchet & Clank: Rift Apart",
//     platform: "PS5"
//   },
//   {
//     title: "Ghost of Tsushima",
//     platform: "PS5"
//   },
//   {
//     title: "Horizon Forbidden West",
//     platform: "PS5"
//   },
//   {
//     title: "The Legend of Zelda: Breath of the Wild",
//     platform: "Nintendo Switch"
//   },
//   {
//     title: "Animal Crossing: New Horizons",
//     platform: "Nintendo Switch"
//   },
//   {
//     title: "Super Smash Bros. Ultimate",
//     platform: "Nintendo Switch"
//   },
//   {
//     title: "Mario Kart 8 Deluxe",
//     platform: "Nintendo Switch"
//   },
//   {
//     title: "Splatoon 2",
//     platform: "Nintendo Switch"
//   }
//   // Added 5 games for each platform

// ];

// // Connect to the db
// mongoose.connect(db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('Connected to db');

//   // clear games
//   return Game.deleteMany({});
// })
// .then(() => {

//   // Insert the seed data
//   return Game.insertMany(gameSeeds);
// })
// .then(data => {
//   console.log(data.length + ' inserted!');
//   process.exit(0);
// })
// .catch(err => {
//   console.error('there was a problem with seeding the info try again', err);
//   process.exit(1);
// });