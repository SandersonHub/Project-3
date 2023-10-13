const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    console: {
        id: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
        }
    }
});

const Game = mongoose.model('Game', gameSchema);

// exported both the Game model and the gameSchema
module.exports = { Game, gameSchema };
