/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
    alert("You found a match!");
}
else if (cardOne === cardTwo) {
  alert("You found a match!");
}
else if (cardThree === cardFour) {
  alert("You found a match!");
}
else alert("Try again");*/

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay =[];


var board = document.getElementById('game-board');

function createCards() {
  for (var i=0; i<4; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
  }

}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
console.log(this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png'>"; //queen
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createCards();