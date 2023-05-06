const numeros = [2, 3, 1, 10, 12, 7, 6, 5];
const numero = Number(prompt("Digite um número:"));

let indice = 0;
let achouNumero = false;

while (indice < numeros.length) {
  const numeroAtual = numeros[indice];
  if (numeroAtual === numero) {
    achouNumero = true;
    break;
  }
  indice++;
}

if (achouNumero) {
  alert(`O número ${numero} existe no vetor na posição ${indice}.`);
} else {
  alert("O número não foi encontrado");
}
