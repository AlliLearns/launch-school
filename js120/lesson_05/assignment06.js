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
    // console.log("     |     |");
    console.log(`  ${this.squares[0]}  |  ${this.squares[1]}  |  ${this.squares[2]}`);
    // console.log("     |     |");
    console.log("-----+-----+-----");
    // console.log("     |     |");
    console.log(`  ${this.squares[3]}  |  ${this.squares[4]}  |  ${this.squares[5]}`);
    // console.log("     |     |");
    console.log("-----+-----+-----");
    // console.log("     |     |");
    console.log(`  ${this.squares[6]}  |  ${this.squares[7]}  |  ${this.squares[8]}`);
    // console.log("     |     |");
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
}

class Square {
  static UNUSED_MARKER   = ' ';
  static HUMAN_MARKER    = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_MARKER) {
    this.marker = marker;
  }

  setMarker(marker) { this.marker = marker }

  isUnused() { return ![Square.HUMAN_MARKER, Square.COMPUTER_MARKER].includes(this.marker) }
  toString() { return this.marker }
}

class Row {
  constructor() {} // need to identify a row of 3 squares
}

class Player {
  constructor(marker) {
    this.marker = marker;
  } 
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
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  } 
  
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;
      
      this.computerMoves();
      // this.board.display();
      if (this.gameOver()) break;
      // break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }
  
  
  displayWelcomeMessage() { console.log(`Welcome to Tic Tac Toe`) }
  displayGoodbyeMessage() { console.log(`Thanks for playing! Bye!`) }
  displayResults() {}


  humanMoves() {
    let choice;
    const validChoices = this.board.unusedSquares();

    console.log(validChoices);
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
    } while (!validChoices.includes(choice))

    this.board.markSquareAt(choice, this.computer.getMarker());
  }


  gameOver() { return false }
}

const game = new TTTGame();
game.play();


function prompt(question) {
  return readLine.question(`=> ${question}: `);
}