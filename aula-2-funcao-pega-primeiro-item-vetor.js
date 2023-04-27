const carros = [
  "Chevette",
  "Marea",
  "HB20",
  "Uno",
  "Fusca",
  "Fiat 147",
  "Corsa",
  "Civic",
];

function getFirstItem(array) {
  const [firstItem] = array;
  return firstItem;
}

const primeiroCarro = getFirstItem(carros);
console.log(primeiroCarro);
