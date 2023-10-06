const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game'
    }
  ]
});

// Hash the password before saving the user to the database
userSchema.pre('save', async function(next) {
    // If the password has not been modified, exit 
  if (!this.isModified('password')) return next();

  // Hash the password, salting with 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model('User', userSchema);

