let player = {
  name: "sherix",
  chips: "145",
};
let cards;
let sum;
let hasBlackjack;
let isAlive;
let message;
let messageEl;
let sumEl;
let cardsEl;
reset();
function reset() {
  cards = [];
  sum = 0;
  hasBlackjack = false;
  isAlive = false;
  message = "";
  messageEl = document.getElementById("message-el");
  messageEl.textContent = "Want to play a round?";
  sumEl = document.getElementById("sum-el");
  sumEl.textContent = "Sum: ";
  cardsEl = document.querySelector("#cards-el");
  cardsEl.textContent = "Cards: ";
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10 && randomCard < 14) {
    return 10;
  } else {
    return randomCard;
  }
}

function rendergame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
    isAlive = true;
  } else if (sum === 21) {
    message = "You've got blackjack. ";
    hasBlackjack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}
function newcard() {
  if (isAlive === true && hasBlackjack === false) {
    let newcard = getRandomCard();
    sum += newcard;
    cards.push(newcard);
    console.log(cards);
    rendergame();
  }
}
function startgame() {
  isAlive = true;
  hasBlackjack = false;
  cards = [];
  cards.push(getRandomCard());
  cards.push(getRandomCard());
  sum = cards[0] + cards[1];
  rendergame();
}
