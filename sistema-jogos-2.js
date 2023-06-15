const cmd = document.querySelector("#console");
const action = prompt(`
Choose action:
Listar jogos [list]
Ver um jogo [view]
Adicionar um jogo [create]
Alterar um jogo [update]
Deletar um jogo [delete]
`);

switch (action) {
  case "list":
    const games = findAll();
    cmd.innerHTML = `** Game list **<br>${games.join("<br>")}`;
    break;
  case "view":
    const gameIdToView = prompt("Input game id to view:");
    const gameTitleToView = findById(gameIdToView);
    cmd.innerHTML = gameTitleToView;
    break;
  case "create":
    const gameId = prompt("Input game id:");
    const gameTitle = prompt("Input game title:");
    create(gameId, gameTitle);
    cmd.innerHTML = `Game "${gameTitle}" created with success!`;
    break;
  case "update":
    const gameIdToUpdate = prompt("Input game id to update:");
    const updatedGameTitle = prompt("Input new game title:");
    update(gameIdToUpdate, updatedGameTitle);
    cmd.innerHTML = `Game "${updatedGameTitle}" updated with success!`;
    break;
  case "delete":
    const gameIdToDelete = prompt("Input game id to delete:");
    deleteById(gameIdToDelete);
    const gamesAfterDelete = findAll();
    cmd.innerHTML = `** Game list **<br>${gamesAfterDelete.join("<br>")}`;
    break;
  default:
    alert("Não existe");
}

function findAll() {
  const games = Object.values(localStorage);
  return games;
}

function findById(gameId) {
  const gameTitle = localStorage.getItem(gameId);
  return gameTitle;
}

function create(gameId, gameTitle) {
  localStorage.setItem(gameId, gameTitle);
}

function deleteById(gameId) {
  localStorage.removeItem(gameId);
}

function update(gameId, gameTitle) {
  localStorage.setItem(gameId, gameTitle);
}
