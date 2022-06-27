const { Router } = require('express');
const userController = require('../controllers/userController');
const userService = require('../services/userService');

const userRouter = Router();

userRouter.get('/', userController.get)

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userService.listUser(id);

  res.status(200).json(user);
})

userRouter.post('/', userController.post);

module.exports = userRouter;