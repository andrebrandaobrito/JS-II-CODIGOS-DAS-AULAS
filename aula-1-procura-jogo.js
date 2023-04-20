const tituloJogo = prompt("Digite um título de jogo:");

let jogos = [
  "Celeste",
  "FF4",
  "Need for Speed: Most Wanted",
  "Catherine",
  "Undertale",
  "Terraria",
  "Snake",
  "Outer Wilds",
  "Hollow Knight",
  "Life is Strange",
  "Ac",
  "Bloodbourne",
  "Resident Evil",
  "Ultrakill",
];

const jogoExiste = jogos.includes(tituloJogo);
if (jogoExiste) {
  alert("O jogo está presente na lista!");
} else {
  alert("404: JOGO NÃO ENCONTRADO!");
}
