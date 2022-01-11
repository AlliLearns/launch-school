class Board {
  constructor() {
    this.squares = [];
    for (let i = 0; i < 9; i++) {
      this.squares.push(new Square(`${i + 1}`));
    }
  } // we need to model a 3 x 3 grid. 

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares[0]}  |  ${this.squares[1]}  |  ${this.squares[2]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[3]}  |  ${this.squares[4]}  |  ${this.squares[5]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[6]}  |  ${this.squares[7]}  |  ${this.squares[8]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Square {
  static UNUSED   = ' ';
  static HUMAN    = 'X';
  static COMPUTER = 'O';

  constructor(marker = Square.UNUSED) {
    this.marker = marker;
  }

  toString() { return this.marker }
}

class Row {
  constructor() {} // need to identify a row of 3 squares
}

class Marker {
  constructor() {} // marker represents a player's 'piece' on the board
}

class Player {
  constructor() {} // marker to keep track of player symbol
  mark() {} // a way to mark the board with player's marker
  play() {} // a way for each player to play the game
}

class Human extends Player {
  constructor() {}
}

class Computer extends Player {
  constructor() {}
}


class TTTGame {
  constructor() {
    this.board = new Board();
  } // Needs a board and two players
  
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;
      
      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }
  
  
  displayWelcomeMessage() { console.log(`Welcome to Tic Tac Toe`) }
  displayGoodbyeMessage() { console.log(`Thanks for playing! Bye!`) }
  displayResults() {}
  firstPlayerMoves() {}
  secondPlayerMoves() {}
  gameOver() { return false }
}

const game = new TTTGame();
game.play();