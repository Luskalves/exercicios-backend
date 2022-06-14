const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs');

const simpsons = require('./simpsons.json')

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong'});
})

app.post('/hello', (req, res) => {
  const { name } = req.body;

  return res.status(201).json({message: `Hello, ${name}!`});
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });

  res.status(201).json({ message: `Hello, ${name}!` })
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(201).json({ message: `Seu nome é ${name} e sua idade é ${age}` })
})

// app.all('*', (req, res) => {
//   return res.status(404).json({ message: `Invalid ${req.path} route!`})
// })

app.get('/simpsons', (_req, res) => {
  res.status(200).json(simpsons);
})

app.listen(3300, () => {
  console.log('Ouvindo na porta 3300!')
})
