const jwt = require('jsonwebtoken');

const secret = 'uiuisegredouiui';

const userService = {
  async validateToken(token) {
    try {
      const { data } = jwt.verify(token, secret);
      return [data, null];
    } catch (e) {
      return [undefined, e.message];
    }
  },
};

module.exports = userService;