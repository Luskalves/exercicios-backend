const readline = require('readline-sync');

const testeImc = () => {
  const altura = readline.questionFloat('Digite a dua altura: ');
  const peso = readline.questionFloat('Digite o seu peso: ');
  const imc = peso / (altura**2);
  let resultado = ''

  if (imc <= 18.5) {
    resultado = 'Abaixo do peso (magreza)'
  } else if (imc > 18.5 && imc <= 24.9) {
    resultado = 'Peso normal'
  } else if (imc > 25.0 && imc <= 29.9) {
    resultado = 'Acima do peso (sobrepeso)'
  } else if (imc > 30.0  && imc <= 34.9) {
    resultado = 'Obesidade grau I'
  } else if (imc > 35.0  && imc <=39.9) {
    resultado = 'Obesidade grau II'
  } else {
    resultado = 'Obesidade grau III e IV'
  } 

  console.log(`Ò seu IMC é de: ${imc.toFixed(2)}`);
  console.log(`E seu resultado é: ${resultado}`);
}

module.exports = { testeImc };
