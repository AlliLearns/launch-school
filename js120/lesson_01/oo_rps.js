// Object-Oriented Rock Paper Scissors with 
// objects and factory functions 

/* Classical approach to planning an object-oriented application: 
    1. Write a textual description of the problem or exercise.
    2. Extract the significant nouns and verbs from the description (state and behavior)
    3. Organize and associate the verbs with the nouns.
*/ 

/* 1. Textual Description of Rock Paper Scissors
      RPS is a two player game where each player chooses one of three 
      possible moves: rock, paper, scissors. The winner is chosen by 
      comparing their moves with the following rules: 
        - Rock     > Scissors
        - Scissors > Paper
        - Paper    > Rock
        - If the moves are equal, game is a tie.
*/

/* 2. Extract Significant Nouns and Verbs
      Nouns: player, move, rule 
      Verbs: choose, compare
*/

/* 3. Associate Verbs and Nouns
      Player - choose
      Move   - xx
      Rule   - xx
      ??     - compare
*/



const readLine = require('readline-sync');

const MAX_SCORE = 2;

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const SPOCK = 'spock';
const LIZARD = 'lizard';
const VALID_MOVES = [ROCK, PAPER, SCISSORS, SPOCK, LIZARD];

const WINNING_COMBOS = {
  [ROCK]:     [SCISSORS, LIZARD],
  [PAPER]:    [ROCK, SPOCK],
  [SCISSORS]: [PAPER, LIZARD],
  [SPOCK]:    [SCISSORS, ROCK],
  [LIZARD]:   [PAPER, SPOCK],
};

function createPlayer() {
  const newPlayer = { 
    wins: 0,
    move: null,

    incrementWins() { this.wins += 1; },
    getWins()       { return this.wins; },
    resetWins()     { this.wins = 0; },
  };

  return newPlayer;
}

function createHuman() {
  const newPlayer = createPlayer();

  const newHuman = {
    choose() {
      let choice = promptUser(`Please choose 'rock', 'paper', 'scissors', 'spock' or 'lizard'`).toLowerCase();

      while (true) {
        if (VALID_MOVES.includes(choice)) break;
        console.log(`${drawPrompt()} Sorry, invalid choice.`);
        choice = promptUser(`Please choose 'rock', 'paper', 'scissors', 'spock' or 'lizard'`).toLowerCase();
      }

      this.move = choice;
    },
  };

  return Object.assign(newPlayer, newHuman);
}

function createComputer() {
  const newPlayer = createPlayer();
  const newComputer = {
    choose() {
      const randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
      this.move = VALID_MOVES[randomIndex];
    },
  };

  return Object.assign(newPlayer, newComputer);
}

function createMove() {
  const newMove = {};

  return newMove;
}

function createRule() {
  const newRule = {};

  return newRule;
}

const compare = function(move1, move2) {};



const RPSGame = {
  human:    createHuman(),
  computer: createComputer(),
  roundWinner: null,
  higherWinCount: {},

  displayWelcomeMessage() {
    console.clear();
    console.log(`-----------------------------------`);
    console.log(` Welcome to Rock, Paper, Scissors!`);
    console.log(`  Hit 'enter' to begin the game.`);
    console.log(`-----------------------------------`);
    readLine.prompt();
    console.clear();
  },

  displayGoodbyeMessage() {
    console.log(`--------------------------------`);
    console.log(`     Thanks for playing!`);
    console.log(`--------------------------------`);
  },

  displayMoves() {
    const humanMove = this.human.move;
    const computerMove = this.computer.move;

    console.clear();
    console.log(`--------------------------------`);
    console.log(`You chose ${humanMove}.`);
    console.log(`Computer chose ${computerMove}.`);
    console.log(`--------------------------------`);
    console.log(``);
  },

  determineWinner() {
    const humanMove = this.human.move;
    const computerMove = this.computer.move;

    if (humanMove === computerMove) this.roundWinner = 'draw';
    if (WINNING_COMBOS[humanMove].includes(computerMove)) this.roundWinner = 'player';
    if (WINNING_COMBOS[computerMove].includes(humanMove)) this.roundWinner = 'computer'; 
  },

  updatePlayerWins() {
    const currentWinner = this.roundWinner;
    if (currentWinner === 'player') this.human.incrementWins();
    if (currentWinner === 'computer') this.computer.incrementWins();
  },

  updateHighestWins() {
    const playerWins = this.human.getWins();
    const computerWins = this.computer.getWins();
    if (playerWins < computerWins) this.higherWinCount = {computer: computerWins};
    else this.higherWinCount = {player: playerWins};
  },

  reportWinCount() {
    console.log(`You have ${this.human.getWins()} wins.`);
    console.log(`Computer has ${this.computer.getWins()} wins.`);
    console.log(``);
  },

  generateWinningMessage() {
    switch(this.roundWinner) {
      case 'draw':      return `It's a draw!`;
      case 'player':    return `Congratulations, you win!`;
      case 'computer':  return `Computer wins!`;
      default:          return `Winner is indeterminate.`;
    }
  },

  
  playAgain() {
    console.log(``);
    let again = promptUser(`Would you like to play again? (y/n)`);
    return again.toLowerCase()[0] === `y`;
  },
  
  winnerFound() {
    return Object.values(this.higherWinCount)[0] >= MAX_SCORE;
  },
  
  displayGameWinner() {
    console.clear();
    const winner = Object.keys(this.higherWinCount);
    if (winner[0] === 'player') console.log(`Player wins!`);
    else console.log(`Computer wins!`);
    console.log(``);
  },

  playRound() {
    this.human.choose();
    this.computer.choose();

    this.displayMoves();
    this.determineWinner();
    this.updatePlayerWins();
    this.updateHighestWins();

    console.log(this.generateWinningMessage());
    this.reportWinCount();
  },
 
  play() {
    this.displayWelcomeMessage();

    do    { this.playRound(); }
    while (!this.winnerFound());

    this.displayGameWinner();
    this.displayGoodbyeMessage();
  },
};


RPSGame.play();

function promptUser(question) {
  return readLine.question(`${drawPrompt()} ${question}: `);
}

function drawPrompt() {
  return `=>`
}