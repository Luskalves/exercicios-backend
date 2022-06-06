const readline = require('readline-sync');

const escolha = readline.questionInt('Digite um valor: ');
const sorteio = 10 * Math.random();

console.log(`O número escolhido foi: ${escolha}`);
console.log(`Ò número sorteado foi: ${parseInt(sorteio)}`)

if (escolha === parseInt(sorteio)) {
  console.log('Você ganhou!')
} else {
  console.log('Não foi dessa vez! :/');
};
