const loginService = require('../services/loginService');

const login = {
  async post(req, res) {
    const token = await loginService.validateBody(req.body);
    res.status(200).json({ token }); 
  },
};

module.exports = login;