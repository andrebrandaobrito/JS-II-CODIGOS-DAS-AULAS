const options = `
[t] ver todos os jogos
[rand] ordem aleatória
[v] ver jogo
[size] mostrar quantidade de jogos
[d] deletar jogo
[du] deletar último jogo
[dp] deletar primeiro jogo
[a] adicionar jogo
[p] ver primeiro jogo adicionado
[u] ver último jogo adicionado
[asc] ordenar jogos (alfabética, asc)
[desc] ordenar jogos (alfabética, desc)
`;

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

const acao = prompt(`Qual ação você quer executar?${options}`);

function sortJogosAleatorios() {
  return Math.random() - 0.5;
}

switch (acao) {
  case "t":
    verTodosOsJogos();
    break;
  case "rand":
    mostrarJogosEmOrdemAleatoria();
    break;
  case "v":
    verJogo();
    break;
  case "size":
    mostrarQuantidadeDeJogos();
    break;
  case "d":
    deletarJogoPeloIndice();
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

function verTodosOsJogos() {
  console.log(...jogos);
}

function mostrarJogosEmOrdemAleatoria() {
  jogos.sort(sortJogosAleatorios);
  console.log(...jogos);
}

function verJogo() {
  const indiceJogo = Number(prompt("Digite o índice do jogo:"));
  const jogoSelecionado = jogos[indiceJogo];
  console.log(jogoSelecionado);
}

function mostrarQuantidadeDeJogos() {
  const quantidadeDeJogos = jogos.length;
  console.log(quantidadeDeJogos);
}

function deletarJogoPeloIndice() {
  const indiceJogoDeletar = Number(
    prompt("Digite o índice do jogo a ser deletado:")
  );
  jogos.splice(indiceJogoDeletar, 1);
  console.log(...jogos);
}
