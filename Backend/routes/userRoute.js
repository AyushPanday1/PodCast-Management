// /routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../model/userModal');
const Project = require('../model/projectModal');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If the user already exists, send a response indicating the existing user
      return res.status(200).json({ message: 'Existing User', userId: existingUser._id });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    // Return the newly created user's ID
    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add other authentication routes as needed

module.exports = router;
