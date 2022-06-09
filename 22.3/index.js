const express = require('express');

const app = express();

const luska = { message: 'pong' }

app.get('/', (_req, res) => {
  res.status(200).json(luska)
});

app.listen(3001, () => {
  console.log('ouvindo na porta 3001');
})