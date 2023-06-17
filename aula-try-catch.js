function getItem(arr, index) {
  const item = arr[index];
  if (item === undefined) {
    const rangeError = new RangeError(
      "ESSE ÍNDICE NÃO EXISTE! CUIDADO AO ANDAR NA RUA! NÃO OLHE PARA TRÁS!"
    );
    throw rangeError;
  }
  return item;
}

const index = Number(prompt("Digite o índice da cor:"));
const colors = ["vermelho", "azul", "verde", "roxo"];

try {
  const cor = getItem(colors, index);
  alert(cor.toUpperCase());
} catch (error) {
  alert("Deu erro!");
}

alert("Fim do código");
