const { promessa } = require('./promise')

const values = []

for(let i = 0; i < 3; i += 1){
  let value = Math.floor(Math.random() * 100 + 1);
  values.push(value);
}

promessa(...values)
  .then(response => console.log(`Resultado ${response}`))
  .catch(err => console.log(`ERROR: ${err}`));
