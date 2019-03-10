var cards = [
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function() {
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
}
var flipCard = function() {
	this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
var createBoard = function() {
	for (var i = 0; i <= 4; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardElement.appendChild('game-board');
	}
}
createBoard();








