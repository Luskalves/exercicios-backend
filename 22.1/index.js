const readline = require('readline-sync')
// const {IMC, SORTEIO, VELOCIDADE} = require('./')

const { testeImc } = require('./imc');
const { fazSorteio } = require('./sorteio');
const { medeVelocidade } = require('./vloecidade');
console.log('---------------------------')
console.log('Escolha uma das opções');
console.log('Teste de IMC[1]');
console.log('Fazer um Sorteio[2]');
console.log('Verificar a Velocidade[3]');
console.log('-------------------------')

const escolha = readline.question('Digite uma das opções:')

if (escolha === 1 || escolha === "1") {
  testeImc();
}
if (escolha === 2|| escolha === "2") {
  fazSorteio();
}
if (escolha === 3 || escolha === "3") {
  medeVelocidade();
}
