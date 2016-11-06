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


var board = document.getElementById('game-board');

function createCards() {
  for (var i=0; i<4; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    board.appendChild(cardElement);
  }

}

createCards();