var luccaFazendoPerguntaDificilObj = {
  numerosA: [1, 2, 3, 4, 5],
  numerosB: [2, 5, 7],
  numerosC: [8, 5, 1],
};

const somatorioObjRetorno = somatorioObj(luccaFazendoPerguntaDificilObj);
console.log(somatorioObjRetorno);

function somatorioObj(numerosObj) {
  let somatorioRetornoObj = {};
  for (const prop in numerosObj) {
    somatorioRetornoObj[prop] = somatorio(numerosObj[prop]);
  }

  return somatorioRetornoObj;
}

function somatorio(numeros) {
  let somatorioNumeros = 0;
  for (const numero of numeros) {
    somatorioNumeros += numero;
  }
  return somatorioNumeros;
}
