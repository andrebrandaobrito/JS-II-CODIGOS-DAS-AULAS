const res = executaOperacaoMatematica(2, 3, (a, b) => a ** b);
console.log(res);

function executaOperacaoMatematica(a, b, operacaoMatematica) {
  const resultado = operacaoMatematica(a, b);
  return resultado;
}

function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiplica(a, b) {
  return a * b;
}
