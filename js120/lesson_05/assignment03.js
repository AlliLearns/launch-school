/*  Scaffolding
  We've already identified the nouns and verbs we expect to need in our
  program. Let's put that to work by building some skeletal classes; 
  scaffolding. We'll need a `constructor` method in each class, and we
  should also think about the possible states for each class's objects. 
  We won't go into any great detail yet, and won't make any significant 
  design decisions just yet. 
*/

class Board {
  constructor() {} // we need to model a 3 x 3 grid. 
}

class Square {
  constructor() {} // need to keep track of a square's marker
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


/*  Orchestrating the Game
  Sketch out the behavior of the 'play' method of the 'TTTGame' class.
  We'll write a 'spike' - some exploratory code to help begin sketching 
  out the program's structure and design. 

  The idea of a spike is to take a high-level view to get an idea of 
  how the program will flow. It focuses on the general logic of the 
  program and doesn't care about details. 
*/

// Orchestration engine
class TTTGame {
  constructor() {} // Needs a board and two players
  
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

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
  displayBoard() {}
  displayResults() {}
  firstPlayerMoves() {}
  secondPlayerMoves() {}
  gameOver() { return false }
}

const game = new TTTGame();
game.play();