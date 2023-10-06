const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  platform: {
    type: String,
    required: true,
    //mongoose enum validation
    //ensures that value of platform is one of the following
    enum: ['Xbox', 'PS5', 'Nintendo Switch']
  },
  description: String,
  releaseDate: Date
});

module.exports = mongoose.model('Game', gameSchema);
