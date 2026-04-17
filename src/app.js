const express = require('express');
const { formatGreeting } = require('./greetings');

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

module.exports = app;
