const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let indice = 0;

while (indice < numeros.length) {
  const numeroAtual = numeros[indice];
  if (numeroAtual % 2 === 0) {
    indice++;
    continue;
  }
  console.log(numeroAtual);
  indice++;
}
