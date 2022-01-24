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

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const VALID_MOVES = [ROCK, PAPER, SCISSORS];

const WINNING_COMBO = {
  [ROCK]: SCISSORS,
  [SCISSORS]: PAPER,
  [PAPER]: ROCK,
}

function createPlayer() {
  const newPlayer = { move: null };
  return newPlayer;
}

function createHuman() {
  const newPlayer = createPlayer();

  const newHuman = {
    choose() {
      let choice = promptUser(`Please choose 'rock', 'paper' or 'scissors'`).toLowerCase();

      while (true) {
        if (VALID_MOVES.includes(choice)) break;
        console.log(`${drawPrompt()} Sorry, invalid choice.`);
        choice = promptUser(`Please choose 'rock', 'paper' or 'scissors'`).toLowerCase();
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
    console.clear();
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
    if (WINNING_COMBO[humanMove] === computerMove) this.roundWinner = 'player';
    if (WINNING_COMBO[computerMove] === humanMove) this.roundWinner = 'computer';    
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
 
  play() {
    this.displayWelcomeMessage();

    do {
      console.clear();
      this.human.choose();
      this.computer.choose();
      this.displayMoves();
      this.determineWinner();
      console.log(this.generateWinningMessage());
    } while (this.playAgain())

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