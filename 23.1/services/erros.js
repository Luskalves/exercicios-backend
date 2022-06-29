const throwInvalidUser = (message, name) => {
  const error = new Error(message);
  if (name) {
    error.name = name;
  }
  throw error;
}

class invalidDataError extends error {
  constructor(message) {
    super(message);
    this.name = 'invalidData'
  }
}

module.exports = {
  throwInvalidUser,
  invalidDataError
};