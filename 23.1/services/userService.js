const userModule = require('../modules/users');
const { throwInvalidUser } = require('./erros');

function exists(firstName, lastName, email, password){
  const errorName = 'invalidData';
  let message = 'error';
  if (!firstName) {
    message = 'o campo "firstName" é obrigatório'
    throwInvalidUser(message, errorName);
  }
  if (!lastName) {
    message = 'o campo "lastName" é obrigatório'
    throwInvalidUser(message, errorName);
  }
  if (!email) {
    message = 'o campo "email" é obrigatório'
    throwInvalidUser(message, errorName);
  }
  if (!password) {
    message = 'o campo "email" é obrigatório'
    throwInvalidUser(message, errorName);
  }
  if (password.length < 6) {
    message = 'o campo "password" precisa tar no mínimo 6 caracteres'
    throwInvalidUser(message, errorName);
  }
}

function existsData(firstName, lastName, email, password){
  const errorName = 'invalidDataPut';
  let message = 'error';

  if (!firstName) {
    message = '"firstName" is required'
    throwInvalidUser(message, errorName);
  }
  if (firstName.length === 0) {
    message = '"firstName" is not allowed to be empty'
    throwInvalidUser(message, errorName);
  }

  if (!lastName) {
    message = '"lastName" is required'
    throwInvalidUser(message, errorName);
  }
  if (lastName.length === 0) {
    message = '"lastName" is not allowed to be empty'
    throwInvalidUser(message, errorName);
  }

  if (!email) {
    message = '"email" is required'
    throwInvalidUser(message, errorName);
  }
  if (email.length === 0) {
    message = '"email" is not allowed to be empty'
    throwInvalidUser(message, errorName);
  }

  if (!password) {
    message = '"password" is required'
    throwInvalidUser(message, errorName);
  }
  if (password.length === 0) {
    message = '"password" is not allowed to be empty'
    throwInvalidUser(message, errorName);
  }
}

const userService = {
 
  async validateUsers(req) {
    const { firstName, lastName, email, password } = req;
    exists(firstName, lastName, email, password);
    const id = await userModule.createUser(firstName, lastName, email, password);
    return id;
  },

  async listAll() {
    return userModule.listAll();
  },

  async listUser(id) {
    return userModule.listUser(id);
  },

  async validateData(id, body) {
    const { firstName, lastName, email, password } = body;
    existsData(firstName, lastName, email, password);
  }
}

module.exports = userService;