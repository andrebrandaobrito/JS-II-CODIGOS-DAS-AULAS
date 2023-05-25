const palavras = [
  "batata",
  "palavras",
  "doritos",
  "pinguim",
  "ventilador",
  "café",
  "supino",
  "esmalte",
  "rato",
  "pilé",
  "devaneios",
  "pneumoultramicroscopicossilicovulcanoconiótico",
  "meu deus",
  "trimpot",
];

/*
let palavrasUppercase = [];
for (const palavra of palavras) {
  palavrasUppercase.push(palavra.toUpperCase());
}
console.log(palavrasUppercase);
*/

const palavrasUppercase = palavras.map((palavra) => palavra.toUpperCase());
console.log(palavrasUppercase);
