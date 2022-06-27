const { Router } = require('express');
const userController = require('../controllers/userController');
const userService = require('../services/userService');

const userRouter = Router();

userRouter.get('/', userController.get)

userRouter.get('/:id', userController.getUser)

userRouter.post('/', userController.post);

module.exports = userRouter;