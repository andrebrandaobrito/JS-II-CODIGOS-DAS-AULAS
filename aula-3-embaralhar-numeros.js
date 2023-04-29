const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function embaralhaNumeros() {
  return Math.random() - 0.5;
}

nums.sort(embaralhaNumeros);
console.log(...nums);
