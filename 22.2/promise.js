async function promessa(n1, n2, n3) {
  let testErr = false;
  [n1,n2,n3].forEach((n) => {
    if (typeof n != "number") !testErr;
  })
  const result = await new Promise((resolve, reject) => {
    if (testErr) reject('Informe apenas números');

    const response = (n1 + n2) * n3;
    if (response < 50) reject(Error('Valor muito baixo'))
    resolve(response);
  })
  return result;
}

promessa(1,200,3).then(response => console.log(response));