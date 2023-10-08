const mongoose = require('mongoose');

const gameConsoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
});

module.exports = mongoose.model('GameConsole', gameConsoleSchema);
