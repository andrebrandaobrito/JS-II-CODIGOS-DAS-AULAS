function criaArrayDeNumeros(tamanho, numeros) {
  if (numeros.length < tamanho) {
    const proximosNumeros = numeros.concat(numeros.length + 1);
    return criaArrayDeNumeros(tamanho, proximosNumeros);
  }
  return numeros;
}

const vetorNumeros = criaArrayDeNumeros(3, []);
console.log(vetorNumeros);
