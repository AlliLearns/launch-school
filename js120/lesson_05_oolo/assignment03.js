/* Scaffolding */

const boardPrototype = {};

const playerPrototype = {};
const humanPrototype = {};
const computerPrototype= {};

const TTTGame = {

  displayWelcomeMessage() { console.log(`Welcome`); },
  displayGoodbyeMessage() { console.log(`Goodbye`); },
  displayBoard() {},
  displayGameResults() {},

  firstPlayerMoves() {},
  secondPlayerMoves() {},

  playRound() {
    console.log(`Played round of tic tac toe`);
    do {
      this.displayBoard();

      this.firstPlayerMoves();
      if (this.winnerFound()) break;
  
      this.secondPlayerMoves();
      if (this.winnerFound()) break;
    } while (!this.winnerFound());
  },

  winnerFound() { return true },


  play() {
    this.displayWelcomeMessage();

    this.playRound();

    this.displayGameResults();
    this.displayGoodbyeMessage();
  },
};

TTTGame.play();

