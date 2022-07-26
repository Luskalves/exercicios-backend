const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secret = 'uiuisegredouiui';

const adminUser = {
  username: 'admin',
  password: 's3nh4S3gur4',
};

const schema = Joi.object({
  name: Joi.string().alphanum().min(5).required(),
  password: Joi.string().alphanum().min(5).required(),
});

const loginService = {
  async validateBody(user) {
    const validate = schema.validate(user);
    if (validate && JSON.stringify(user) === JSON.stringify(adminUser)) {
      const token = jwt.sign({ data: user, admin: true }, secret);
      return token;
    }
    if (validate) {
      const token = jwt.sign({ data: user, admin: false }, secret);
      return token;
    }
  },
};

module.exports = loginService;