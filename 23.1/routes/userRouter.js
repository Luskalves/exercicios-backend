const { Router } = require('express');
const userController = require('../controllers/userController');
const userService = require('../services/userService');

const userRouter = Router();

userRouter.get('/', userController.get)

userRouter.get('/:id', userController.getUser)

userRouter.post('/', userController.post);

userRouter.put('/:id', (req , res) => {
  const { id } = req.params;
  userService.validateData(id, req.body);
  const { firstName, lastName, email } = req.body;

  res.status(200).json({ id, firstName, lastName, email });

})
module.exports = userRouter;