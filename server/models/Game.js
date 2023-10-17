const mongoose = require('mongoose');
const { consoleSchema } = require('./Console');
const { Schema } = mongoose;

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    console: {
        type: Schema.Types.ObjectId,
        ref: 'Console',
        required: true
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

