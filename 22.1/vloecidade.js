const readline = require('readline-sync');

const distancia = readline.questionFloat('Digite a distância em metros: ');
const tempo = readline.questionFloat('Digite o tempo em segundos: ');
const velocidade = distancia / tempo;

console.log(`A velocidade média é de ${velocidade}`);
