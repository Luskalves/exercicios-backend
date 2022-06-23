const express = require('express');
// const 

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  const { name } = req.body;

  res.send(`olar ${name}`);
})

app.listen(3002)