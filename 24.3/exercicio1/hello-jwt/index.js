require('dotenv').config();
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const bodyParser = require('body-parser');

const loginController = require('./controllers/login');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const userController = require('./controllers/users');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.get('/users/me', userController.get);

app.post('/login', loginController.post);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
