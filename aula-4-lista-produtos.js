let produtos = [];

while (true) {
  const produto = prompt("Qual produto você deseja adicionar ao carrinho?");
  if (produto === "") {
    break;
  } else {
    produtos.push(produto);
  }
}

console.log(...produtos);
