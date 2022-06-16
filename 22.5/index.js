/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const sales = []

app.use(bodyParser.json());

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;

  if (productName.length < 4) return res.status(400)
    .json({ message: "O campo productName é obrigatório" })

  sales.push({productName, infos});

  res.status(201).json(sales);
})

app.listen(3301, () => {
  console.log('ouvindo na porta 3301');
});
