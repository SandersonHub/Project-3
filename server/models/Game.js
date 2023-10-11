const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({


    //schema stuff
});

const Game = mongoose.model('Game', gameSchema);

module.exports = {Game,gameSchema};
