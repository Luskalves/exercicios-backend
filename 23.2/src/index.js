const express = require('express');
const fs = require('fs/promises');
const throwHandleError = require('./errors/erros');
const apiRoutes = require('./routes/apiRoutes');
require('express-async-errors');

const app = express();

app.use(express.json());

app.use('/', apiRoutes)

app.get('/luska', async (req, res) => {
  const leitura = JSON.parse(await fs.readFile('./lusksa.json'));
  if (!leitura) {
    throwHandleError('deu_ruim');
  }
  res.status(200).json(leitura);
})

app.use((err, req, res, next) => {
  const { name, message } = err;

  switch (name) {
    case 'deu_ruim':
      return res.status(404).json({ erro: name, message });
    default:
      res.status(500).json({ message: 'esculambou-se' })
      break
  }
})

app.listen(3000);

