const userService = require('../services/userService');

const userController = {
  async post(req, res) {
    const id = await userService.validateUsers(req.body);
    const { firstName, lastName, email } = req.body;

    const item = { id, firstName, lastName, email }; 

    res.status(201).json(item);
  },

  async get(_req, res) {
    const listUsers = await userService.listAll();
    res.status(200).send(listUsers);
  }
}

module.exports = userController;