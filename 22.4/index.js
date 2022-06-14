const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong'});
})

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Invalid ${req.path} route!`})
})

app.listen(3300, () => {
  console.log('sim')
})
