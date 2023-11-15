const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const projects = [];

app.post('/projects', (req, res) => {
  const { projectName } = req.body;
  const newProject = { id: projects.length + 1, name: projectName };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.get('/projects', (req, res) => {
  res.json(projects);
});

PORT = 400

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
