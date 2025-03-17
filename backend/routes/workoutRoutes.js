const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const workoutsPath = path.join(__dirname, "../data/WorkoutList.json");
const workouts = JSON.parse(fs.readFileSync(workoutsPath, "utf-8"));

router.get('/', (req, res) => {
  res.json(workouts);
});

module.exports = router;