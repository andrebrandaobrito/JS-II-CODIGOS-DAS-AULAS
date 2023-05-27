function contarAte(numero, numeroAte) {
  console.log(numero);
  if (numero < numeroAte) {
    const proximoNumero = numero + 1;
    contarAte(proximoNumero, numeroAte);
  }
}
contarAte(0, 5);
