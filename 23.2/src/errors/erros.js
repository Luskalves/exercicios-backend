const throwHandleError = (message) => {
  const erro = new Error(message);
  erro.name = 'deu_ruim';

  throw erro;
}

module.exports = throwHandleError;