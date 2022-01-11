const readLine = require('readline-sync');

class Board {
  constructor() {
    this.squares = [];
    for (let i = 0; i < 9; i++) {
      this.squares.push(new Square(`${i + 1}`));
    }
  }

  display() {
    console.log("");
    console.log(`  ${this.squares[0]}  |  ${this.squares[1]}  |  ${this.squares[2]}`);
    console.log("-----+-----+-----");
    console.log(`  ${this.squares[3]}  |  ${this.squares[4]}  |  ${this.squares[5]}`);
    console.log("-----+-----+-----");
    console.log(`  ${this.squares[6]}  |  ${this.squares[7]}  |  ${this.squares[8]}`);
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key - 1].setMarker(marker);
  }

  unusedSquares() {
    const indices = [];
    for (let i = 0; i < 9; i++) {
      if (this.squares[i].isUnused()) indices.push(i + 1);
    }
    return indices;
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  checkMarkersFor(player, winningCombo) {
    const markers = winningCombo.filter(square => {
      return this.squares[square].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}

class Square {
  static UNUSED_MARKER   = ' ';
  static HUMAN_MARKER    = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_MARKER) {
    this.marker = marker;
  }

  setMarker(marker) { this.marker = marker }
  getMarker() { return this.marker }
  isUnused() { return ![Square.HUMAN_MARKER, Square.COMPUTER_MARKER].includes(this.marker) }
  toString() { return this.marker }
}

class Player {
  constructor(marker) { this.marker = marker }
  getMarker() { return this.marker }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}


class TTTGame {
  static POSSIBLE_WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ]

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    console.clear();
    this.displayWelcomeMessage();

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
    this.displayGoodbyeMessage();
  }


  displayWelcomeMessage() { console.log(`Welcome to Tic Tac Toe\n`) }
  displayGoodbyeMessage() { console.log(`Thanks for playing! Bye!\n`) }

  displayResults() {
    const humanWon    = this.isWinner(this.human);
    const computerWon = this.isWinner(this.computer);

    if (humanWon)         console.log(`You won! Congratulations!\n`);
    else if (computerWon) console.log(`Computer won.\n`);
    else                  console.log(`Game was a tie.\n`);
  }

  humanMoves() {
    let choice;
    const validChoices = this.board.unusedSquares();

    while (true) {
      choice = Number(prompt("Choose a square number"));
      if (validChoices.includes(Number(choice))) break;
      console.log(`Sorry, that wasn't a valid choice`);
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    const validChoices = this.board.unusedSquares();
    let choice;
    do {
      choice = Math.floor(Math.random() * 9 + 1);
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() { return this.board.isFull() || this.someoneWon() }


  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(combo => {
      return this.board.checkMarkersFor(player, combo) === 3;
    });
  }
}

const game = new TTTGame();
game.play();


function prompt(question) {
  return readLine.question(`=> ${question}: `);
}