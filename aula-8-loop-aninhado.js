const numeros = [
  [1, 4, 3, 2, 7],
  [1, 2, 3],
  [8, 7, 1, 7],
  [5, 6, 2, 1],
  [1, 2, 3, 4, 5, 6, 7],
  [9, 8, 7, 6, 5],
];

let somatorio = 0;

for (const linha of numeros) {
  for (const numero of linha) {
    somatorio += numero;
  }
}

console.log(somatorio);
