function divisao(x, y) {
  return new Promise(function (resolve, reject) {
    if (y === 0) {
      reject('não é possível dividir por zero');
    }
    resolve(x / y);
  });
}

divisao(12, 2)
  .then(function (res) {
    console.log('Resultado da divisão: ' + res);
  })
  .catch(function (err) {
    console.log('Falha na divisão: ' + err);
  });
divisao(12, 0)
  .then(function (res) {
    console.log('Resultado da divisão: ' + res);
  })
  .catch(function (err) {
    console.log('Falha na divisão: ' + err);
  });
