let somatorio = 0;

while (true) {
  let integerError;
  try {
    const numero = promptInteger("Digite um número:");
    if (numero === 0) {
      break;
    }
    somatorio += numero;
  } catch (error) {
    if (error instanceof RangeError) {
      integerError = error;
      alert("Erro: você deve digitar apenas números inteiros.");
    } else {
      throw error;
    }
  } finally {
    if (integerError !== undefined) {
      const shouldContinue = confirm("Desejar continuar?");
      if (shouldContinue) {
        alert(`Resultado parcial: ${somatorio}`);
      } else {
        break;
      }
    }
  }
}

function promptInteger(text) {
  // Precisa ser um número válido
  // Precisa ser um número inteiro
  const numero = Number(prompt(text));
  if (isNaN(numero)) {
    throw new RangeError("É necessário digitar um número!");
  } else if (!Number.isInteger(numero)) {
    throw new RangeError("É necessário digitar um número inteiro!");
  }
  return numero;
}

alert(`Resultado final: ${somatorio}`);
