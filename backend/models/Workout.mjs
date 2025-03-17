const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  }, 

  category: {
    type: String, 
    enum: ['Cardio', 'Strength', 'Flexibility', 'Endurance', 'Hypertrophy'],
    required: true
  },

  difficulty: {
    type: String,
    enum: ['beginner', 'early-intermediate', 'intermediate', 'high-intermediate', 'advanced'],
    required: true
  },

  muscle_group: {
    type: [String],
    enum: ['Chest', 'Back', 'Legs', 'Arms', 'Core', 'Full Body'],
    required: true,
  },

  muscles: {
    type: [String],
    enum: ['Pectoralis Major', 'Pectoralis Minor', 'Latissimus Dorsi', 'Trapezius', 
          'Rhomboids', 'Erector Spinae', 'Quadriceps', 'Hamstrings', 'Gluteus Maximus', 
          'Gluteus Medius', 'Gluteus Minimus', 'Calves', 'Gastrocnemius', 'Soleus', 
          'Biceps Brachii', 'Triceps Brachii', 'Brachialis', 'Forearm Flexors', 'Forearm Extensors', 
          'Rectus Abdominis', 'Obliques', 'Transverse Abdominis', 'Serratus Anterior', 'Deltoids', 
          'Anterior Deltoid', 'Medial Deltoid', 'Posterior Deltoid', 'Sternocleidomastoid', 'Levator Scapulae'
    ],
    required: true
  },

  reps: {
    type: String,
    required: true
  },

  sets: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Workout', workoutSchema);