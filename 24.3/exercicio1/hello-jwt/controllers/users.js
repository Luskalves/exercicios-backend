const userService = require('../services/userService');

const userController = {
  async get(req, res) {
    const token = req.headers.authorization;
    if (!token) return res.status(404).json({ error: { message: 'Token not found' } });
    const [user, erro] = await userService.validateToken(token);
    if (!user) return res.status(401).json({ error: { message: erro } });
    res.status(200).json({ user });
  },
};

module.exports = userController;