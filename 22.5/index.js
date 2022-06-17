const express = require('express');
const bodyParser = require('body-parser');
const validateDate = require('validate-date');

const app = express();
const sales = []

app.use(bodyParser.json());

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;
  const { saleDate, warrantyPeriod } = infos;
  const includedInfos = Object.keys(infos).includes(['saleDate', 'warrantyPeriod']);
  const isDateValid = validateDate(saleDate, dateFormat="dd/mm/yyyy");

  if (!productName) {
    return res.status(400).json({ message: "O campo productName é obrigatório" })
  } else if (productName.length < 4) {
    return res.status(400)
        .json({message: "O campo productName deve ter pelo menos 4 caracteres"})
  }
  
  if (typeof infos !== 'object') {
    return res.status(400).json({ message: "O campo deve ser um objeto" });
  } else if (!includedInfos) {
    return res.status(400).json({ message: "O campo infos é obrigatório" });
  }

  if (!saleDate || !isDateValid) {
    return res.status(400).json({ "message": "O campo saleDate não é uma data válida" });
  }

  sales.push({productName, infos});
  res.status(201).json(sales);
})

app.listen(3301, () => {
  console.log('ouvindo na porta 3301');
});
