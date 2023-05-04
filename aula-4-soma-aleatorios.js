let valor = 0;

while (valor < 100) {
  const incremento = Math.ceil(Math.random() * 10);
  valor = valor + incremento;
  console.log(valor);
}

alert(valor);
