const numeroA = promptNumber("Digite o primeiro número:");
const numeroB = promptNumber("Digite o segundo número:");

const resultadoSoma = numeroA + numeroB;
alert(resultadoSoma);

function promptNumber(texto) {
  const numero = Number(prompt(texto));
  return numero;
}
