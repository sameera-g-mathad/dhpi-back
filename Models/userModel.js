const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  password: {
    type: Number,
    default: 123456789,
  },
  dairy: [
    {
      title: String,
      description: String,
      time: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
