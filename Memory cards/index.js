const symbols = ["🌙", "🍀", "🍎", "🍓", "🍒", "🍇", "🍉", "⭐", "🔥"];
let cards = [];
let flippedCards = [];
let matchedCards = [];
let gameBoard = document.getElementById("game-board");
let restartButton = document.getElementById("restart-button");

function startGame() {
  gameBoard.innerHTML = "";
  flippedCards = [];
  matchedCards = [];

  cards = [...symbols, ...symbols];
  cards = shuffle(cards);
  for (let symbol of cards) {
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.symbol = symbol;
    card.textContent = "?";
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  }
}
