const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({

  // TBD

  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Workout', workoutSchema);