const throwInvalidUser = (message, name) => {
  const error = new Error(message);
  if (name) {
    error.name = name;
  }

  throw error;
}

module.exports = {
  throwInvalidUser,
};