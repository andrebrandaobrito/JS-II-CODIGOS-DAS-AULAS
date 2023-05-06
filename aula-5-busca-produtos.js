const produtos = [
  "maça",
  "leite",
  "café",
  "picanha",
  "queijo",
  "apresuntado",
  "manteiga",
  "costelinha",
  "bisteca",
  "cheetos sabor churrasco",
  "churizo",
  "doritos",
  "yogurt",
];

let indice = 0;
let achouProduto = false;
const busca = prompt("Digite algo para pesquisar...");

while (indice < produtos.length) {
  const produtoAtual = produtos[indice];
  if (produtoAtual.includes(busca)) {
    achouProduto = true;
    alert(`Produto encontrado: ${produtoAtual}`);
    break;
  }
  indice++;
}

if (!achouProduto) {
  alert("O produto não foi encontrado");
}
