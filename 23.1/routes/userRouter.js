const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', userController.get)

userRouter.post('/', userController.post);

module.exports = userRouter;