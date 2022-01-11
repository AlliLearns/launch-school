const readLine = require('readline-sync');

function prompt(question) {
  return readLine.question(`=> ${question}: `);
}

const DISPLAY_OFFSET = 1;

function Square(marker) {
  this.marker = marker || Square.UNUSED_SQUARE;
}

Square.UNUSED_SQUARE = ' ';
Square.HUMAN_MARKER = 'X';
Square.COMPUTER_MARKER = 'O';

Square.prototype.toString = function() {
  return this.marker;
}

Square.prototype.isUnused = function() {
  return ![Square.HUMAN_MARKER, Square.COMPUTER_MARKER].includes(this.marker);
}

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
}

Square.prototype.getMarker = function() {
  return this.marker;
}


function Board() {
  const arr = new Array(9).fill(1);
  this.squares = arr.map((_, val) => new Square(`${val + DISPLAY_OFFSET}`));
}

Board.prototype.display = function() {
  console.log("");
  console.log(`  ${this.squares[0]}  |  ${this.squares[1]}  |  ${this.squares[2]}`);
  console.log("-----+-----+-----");
  console.log(`  ${this.squares[3]}  |  ${this.squares[4]}  |  ${this.squares[5]}`);
  console.log("-----+-----+-----");
  console.log(`  ${this.squares[6]}  |  ${this.squares[7]}  |  ${this.squares[8]}`);
  console.log("");
}

Board.prototype.markSquareAt = function(slot, marker) {
  this.squares[slot - DISPLAY_OFFSET].setMarker(marker);
}

Board.prototype.unusedSquares = function() {
  return this.squares
             .filter(sq => sq.isUnused())
             .map(sq => Number(sq.toString()));
}

Board.prototype.isFull = function() {
  return this.unusedSquares().length === 0;
}

Board.prototype.checkMarkersFor = function(player, directionCheck) {
  const filledMarkers = directionCheck.filter(square => {
    return this.squares[square].getMarker() === player.getMarker();
  });

  return filledMarkers.length;
}

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
}

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}
Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function TTTGame() {
  this.board = new Board();
  this.human = new Human();
  this.computer = new Computer();
}

TTTGame.POSSIBLE_WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
]

TTTGame.prototype.play = function() {
  console.clear();
  this.displayWelcome();

  while (true) {
    this.board.display();

    this.humanMoves();
    if (this.gameOver()) break;
    console.clear();
    console.log('');

    this.computerMoves();
    if (this.gameOver()) break;
  }

  console.clear();
  this.board.display();
  this.displayResults();
  this.displayGoodbye();
}

TTTGame.prototype.displayWelcome = function() {
  console.log(`Welcome to Tic Tac Toe\n`)
}

TTTGame.prototype.displayGoodbye = function() {
  console.log(`Thanks for playing! Bye!\n`)
}

TTTGame.prototype.humanMoves = function() {
  let choice;
  const validChoices = this.board.unusedSquares();

  while (true) {
    choice = Number(prompt("Choose a square number"));
    if (validChoices.includes(Number(choice))) break;
    console.log(`Sorry, that wasn't a valid choice`);
  }

  this.board.markSquareAt(choice, this.human.getMarker());
}

TTTGame.prototype.computerMoves = function() {
  const validChoices = this.board.unusedSquares();
  let choice;
  do {
    choice = Math.floor(Math.random() * 9 + 1);
  } while (!validChoices.includes(choice));

  this.board.markSquareAt(choice, this.computer.getMarker());
}

TTTGame.prototype.gameOver = function() {
  return this.board.isFull() || this.someoneWon();
}

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(this.human) || this.isWinner(this.computer);
}

TTTGame.prototype.isWinner = function(player) {
  return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(combo => {
    return this.board.checkMarkersFor(player, combo) === 3;
  });
}

TTTGame.prototype.displayResults = function() {
  const humanWon    = this.isWinner(this.human);
  const computerWon = this.isWinner(this.computer);

  if (humanWon)         console.log(`You won! Congratulations!\n`);
  else if (computerWon) console.log(`Computer won.\n`);
  else                  console.log(`Game was a tie.\n`);
}



const game = new TTTGame();
game.play();