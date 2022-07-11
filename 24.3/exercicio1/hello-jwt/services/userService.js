const jwt = require('jsonwebtoken');

const secret = 'uiuisegredouiui';

const userService = {
  async validateToken(token) {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (e) {
      return undefined;
    }
  },
};

module.exports = userService;