// /routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const Project = require('../model/projectModal');

// Get all projects for a user
router.get('/projects/:userId', async (req, res) => {
  try {
    const projects = await Project.find({ user: req.params.userId });
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add other project-related routes as needed

module.exports = router;
