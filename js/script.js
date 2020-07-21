// função que retorna uma promise, dividindo x por y se y for diferente de 0

function divisao(x, y) {
  return new Promise(function (resolve, reject) {
    if (y === 0) {
      reject('não é possível dividir por zero');
    }
    resolve(x / y);
  });
}

// teste 1
divisao(12, 2)
  .then(function (res) {
    console.log('Resultado da divisão: ' + res);
  })
  .catch(function (err) {
    console.log('Falha na divisão: ' + err);
  });

// teste 2
divisao(12, 0)
  .then(function (res) {
    console.log('Resultado da divisão: ' + res);
  })
  .catch(function (err) {
    console.log('Falha na divisão: ' + err);
  });
