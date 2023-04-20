const novosJogosStr = prompt(
  "Digite o título dos jogos separados por vírgula:"
);
const novosJogosArr = novosJogosStr.split(",");

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

const todosJogos = jogos.concat(novosJogosArr);
console.log(todosJogos);
