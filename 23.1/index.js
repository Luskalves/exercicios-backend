const express = require('express');
const userRouter = require('./routes/userRouter');
require('express-async-errors');

// docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root1234 -5 mysql:5

const app = express();
const port = 3000;

app.use(express.json());

app.use('/user', userRouter);

app.use((err, _req, res, _next) => {
  const {name, message} = err;

  switch(name) {
    case 'invalidData': res.status(400).json({ erro: 'true', message}); break;
    case 'invalidDataPut': res.status(400).json({ message });
  };
})

app.listen(port, () => {
  console.log(`ouvindo na porta ${port}`);
})