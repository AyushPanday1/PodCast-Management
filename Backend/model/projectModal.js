// /models/Project.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Add other project-related fields as needed
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
