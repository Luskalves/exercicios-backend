const userService = require('../services/userService');

const userController = {
  async get(req, res) {
    const token = req.headers.authorization;
    const user = await userService.validateToken(token);
    if (!user) return res.status(404).json({ error: { message: 'Token not found' } });
    res.status(200).json({ user });
  },
};

module.exports = userController;