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
function checkMatch() {
  let [card1, card2] = flippedCards;

  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
    flippedCards = [];
    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        alert("Congratulations! You won!");
      }, 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card1.textContent = "?";
      card2.classList.remove("flipped");
      card2.textContent = "?";
      flippedCards = [];
    }, 1000);
  }
}
