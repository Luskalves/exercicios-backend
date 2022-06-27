const userService = require('../services/userService');

const userController = {
  async post(req, res) {
    const id = await userService.validateUsers(req.body);
    const { firstName, lastName, email, password } = req.body;

    const item = { id, firstName, lastName, email }; 

    res.status(201).json(item);
  }
}

module.exports = userController;