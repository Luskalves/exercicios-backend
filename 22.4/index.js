const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong'});
})

app.post('/hello', (req, res) => {
  const { name } = req.body;

  return res.status(201).json({message: `Hello, ${name}!`});
})

// app.all('*', (req, res) => {
//   return res.status(404).json({ message: `Invalid ${req.path} route!`})
// })

app.listen(3300, () => {
  console.log('sim')
})
