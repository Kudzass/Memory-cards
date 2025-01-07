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
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
function flipCard() {
  if (flippedCards.length >= 2 || this.classList.contains("flipped")) {
    return;
  }
  this.classList.add("flipped");
  this.textContent = this.dataset.symbol;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}
