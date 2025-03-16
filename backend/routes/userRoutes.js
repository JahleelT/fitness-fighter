const express = require('express');
const User = require('../models/User.mjs');
const router = express.Router();

router.post('/register', async(req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      password
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully", user});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;