const readline = require('readline-sync');

const altura = readline.questionFloat('Digite a dua altura: ');
const peso = readline.questionFloat('Digite o seu peso: ');
const imc = peso / altura;

console.log(`Ò seu IMC é de: ${imc.toFixed(2)}`);
