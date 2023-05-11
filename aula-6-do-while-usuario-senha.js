let loginComSucesso = false;

do {
  const nomeUsuario = prompt("Digite o nome de usuário:");
  const senha = prompt("Digite a senha:");

  if (
    nomeUsuario === "egvelho" &&
    senha === "eduardo.velho.melhor.prof.infnet"
  ) {
    loginComSucesso = true;
  } else {
    alert("O usuário ou senha digitados estão incorretos.");
  }
} while (loginComSucesso === false);

alert("Usuário autenticado com sucesso!");
