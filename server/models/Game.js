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
    },
    image: { 
        type: String,
        required: false,
        trim: true,
    },
});

// creates the model for schema and then it will export it
const Game = mongoose.model('Game', gameSchema);

// exports the Game model and gameSchema
module.exports = {Game, gameSchema,};

