const express = require('express');
const { formatGreeting } = require('./greetings');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/greet/:name', (req, res) => {
  try {
    res.send(formatGreeting(req.params.name) + '\n');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
