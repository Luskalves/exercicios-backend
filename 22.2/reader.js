const fs = require('fs');
const nomeArquivo = 'simpsons.json'

async function leitor() {
  const personagens = fs.readFile(nomeArquivo, (err, data) => {
    if (err) {
      console.error("tudo errado isso aqui", err);
      process.exit(1)
    }
    const response = JSON.parse(data);
    response.forEach((personagem) => {
      console.log(`${personagem.id} - ${personagem.name}`);
    })
  })
}

leitor();