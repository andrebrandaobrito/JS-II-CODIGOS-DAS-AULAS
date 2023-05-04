document.write(`
<strong>[t]</strong> ver todos os jogos<br>
<strong>[rand]</strong> ordem aleatória<br>
<strong>[v]</strong> ver jogo<br>
<strong>[size]</strong> mostrar quantidade de jogos<br>
<strong>[d]</strong> deletar jogo<br>
<strong>[du]</strong> deletar ultimo jogo<br>
<strong>[dp]</strong> deletar primeiro jogo<br>
<strong>[a]</strong> adicionar jogo<br>
<strong>[p]</strong> ver primeiro jogo adicionado<br>
<strong>[u]</strong> ver último jogo adicionado<br>
<strong>[asc]</strong> ordenar jogos (alfabética, asc)<br>
<strong>[desc]</strong> ordenar jogos (alfabética, desc)<br>
`);

const jogos = [
  "Dark Souls",
  "FIFA",
  "Sinking City",
  "Side Pocket",
  "Hollow Knight",
  "Terraria",
  "Mineirinho",
  "Exapunks",
  "Spiro",
  "Mario",
  "Xadrez",
  "Witcher",
  "Mega Man",
  "Zelda",
];

const acao = prompt("Qual ação você quer executar?");

function sortJogosAleatorios() {
  return Math.random() - 0.5;
}

switch (acao) {
  case "t":
    console.log(...jogos);
    break;
  case "rand":
    jogos.sort(sortJogosAleatorios);
    console.log(...jogos);
    break;
  case "v":
    const indiceJogo = Number(prompt("Digite o índice do jogo:"));
    const jogoSelecionado = jogos[indiceJogo];
    console.log(jogoSelecionado);
    break;
  case "size":
    const quantidadeDeJogos = jogos.length;
    console.log(quantidadeDeJogos);
    break;
  case "d":
    const indiceJogoDeletar = Number(
      prompt("Digite o índice do jogo a ser deletado:")
    );
    jogos.splice(indiceJogoDeletar, 1);
    console.log(...jogos);
    break;
  case "du":
    jogos.pop();
    console.log(...jogos);
    break;
  case "dp":
    jogos.shift();
    console.log(...jogos);
    break;
  case "a":
    const tituloNovoJogo = prompt("Digite o título do jogo a ser inserido:");
    jogos.push(tituloNovoJogo);
    console.log(...jogos);
    break;
  case "p":
    const [primeiroJogo] = jogos;
    console.log(primeiroJogo);
    break;
  case "u":
    const ultimoJogo = jogos.at(-1);
    console.log(ultimoJogo);
    break;
  case "asc":
    jogos.sort();
    console.log(...jogos);
    break;
  case "desc":
    jogos.sort();
    jogos.reverse();
    console.log(...jogos);
    break;
  default:
    alert("Erro: a ação digitada é inválida.");
}
