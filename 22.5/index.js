const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const sales = []

app.use(bodyParser.json());

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;
  const { saleDate, warrantyPeriod } = infos;

  if (!productName) return res.status(400)
    .json({ message: "O campo productName é obrigatório" })

  else if (productName.length < 4) return res.status(400)
    .json({ message: "O campo productName deve ter pelo menos 4 caracteres" })
  
  else if (typeof(infos) !== 'object'
    || !Object.keys(infos).includes(['saleDate', 'warrantyPeriod'])) {
      res.status(400).json({ message: "O campo infos é obrigatório" });
  }
  sales.push({productName, infos});
  res.status(201).json(sales);
})

app.listen(3301, () => {
  console.log('ouvindo na porta 3301');
});
