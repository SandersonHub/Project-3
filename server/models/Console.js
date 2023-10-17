const mongoose = require('mongoose');

const consoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Console = mongoose.model('Console', consoleSchema);

module.exports = {
    Console,
    consoleSchema,
};
