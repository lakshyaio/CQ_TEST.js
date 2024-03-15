const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve index.html, css file, and image file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve JSON object at "/json"
app.get('/json', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Endpoint for task "/all?name=xyz"
app.get('/all', (req, res) => {
  const name = req.query.name;
  const tasks = [
    { name: 'xyz', task: 'Task 1', completed: false },
    { name: 'xyz', task: 'Task 2', completed: true },
    { name: 'xyz', task: 'Task 3', completed: false }
  ];

  const filteredTasks = tasks.filter(task => task.name === name);
  res.json(filteredTasks);
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
