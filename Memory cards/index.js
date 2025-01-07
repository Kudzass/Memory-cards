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
}
