const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
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

module.exports = {
    Game: mongoose.model('Game', gameSchema),
    gameSchema,
};

