const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/oi', (req, res) => {
  res.send('oi');
})

userRouter.post('/', userController.post);

module.exports = userRouter;