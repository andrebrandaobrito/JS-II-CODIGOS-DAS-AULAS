let temCreditoNoCartao = false;

do {
  pegarTrem();
} while (temCreditoNoCartao === false);

function pegarTrem() {
  if (temCreditoNoCartao === true) {
    alert("Você pegou o trem!");
  } else {
    const resposta = prompt(
      "Você conseguiu colocar crédito no atendimento? (S/N)"
    );
    if (resposta === "S") {
      temCreditoNoCartao = true;
    } else if (resposta === "N") {
      alert("Para pegar o trem você precisa colocar crédito no cartão!");
    } else {
      alert('Erro: responda com "S" para sim e "N" para não');
    }
  }
}
