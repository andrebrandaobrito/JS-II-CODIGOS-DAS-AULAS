const nums = [3, 2, 5, 6, 1, 2, 10, 9, 7];

function ordenarNumeros(numA, numB) {
  if (numA > numB) {
    return 1;
  } else if (numA < numB) {
    return -1;
  } else {
    return 0;
  }
}

nums.sort(ordenarNumeros);
console.log(nums);
