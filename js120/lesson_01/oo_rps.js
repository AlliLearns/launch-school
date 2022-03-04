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
      The computer will adjust its choices according to the following:  
        - halve the weight of a given move if losses > wins
        - double the weight of a given move if losses < wins
        - leave the weight of a given move if losses = wins
      Let the player choose the max score at the start of the game. 
        - The game will repeat until one player reaches that number of wins. 
      The game will only be between a human and the computer. 
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

function drawPrompt() {
  return `=>`
}

function promptUser(question) {
  return readLine.question(`${drawPrompt()} ${question}: `);
}

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const SPOCK = 'spock';
const LIZARD = 'lizard';
const MOVES = [ROCK, PAPER, SCISSORS, SPOCK, LIZARD];

/*  RPSGame
    max score
    valid outcomes

    human player
    computer player
    current winner

    welcome message
    goodbye message
    message formatting
    play game
*/

/*  Player
    move history
    win count
    loss count
*/

/*  Human
    assign Player
    choose move
    win message
*/

/*  Computer
    assign Player
    choose move
    win message
*/

/*  Move
    move validation
*/

function createValidMove(move) {
  function formatEntry(moveObj) {
    const CODE_MAP = {
      [ROCK]:     [ROCK, 'r'],
      [PAPER]:    [PAPER, 'p'],
      [SCISSORS]: [SCISSORS, 's', 'sc'],
      [SPOCK]:    [SPOCK, 'o', 'sp'],
      [LIZARD]:   [LIZARD, 'l'],
    };

    for (let moveName in CODE_MAP) {
      if (CODE_MAP[moveName].includes(moveObj.name)) {
        moveObj.name = moveName;
        return;
      } 
    }

    move.name = "invalidName";
  }

  const newMove = {
    name: move.toLowerCase(),
    isValid() { return MOVES.includes(this.name); },
  };

  formatEntry(newMove);
  return newMove;
}

// Format Rock
// const move1 = createMove('r');
// const move2 = createMove('Rock');
// const move3 = createMove('ROCK');
// const move4 = createMove('rock');
// const move5 = createMove('ro');
// console.log(`${move1.name}, ${move2.name}, ${move3.name}, ${move4.name}, ${move5.name}`);
// TESTS PASSED

function createPlayer() {
  const newPlayer = {
    moveHistory: [],
    roundOutcomes: [],

    resetPlayer() {
      this.moveHistory = [];
      this.roundOutcomes = [];
    }
  };

  return newPlayer;
}

function createHuman() {
  const newPlayer = createPlayer();
  const newHuman = {
    chooseMove() {
      let choice = createValidMove(promptUser(`Choose One: ${MOVES.join(', ')}`));

      while(!choice.isValid()) {
        console.log(`${drawPrompt()} Sorry, invalid choice. Pick again.`);
        choice = createValidMove(promptUser(`Choose One: ${MOVES.join(', ')}`));
      }

      this.moveHistory.push(choice.name);
    },
  };

  return Object.assign(newHuman, newPlayer);
}

// const human = createHuman();
// for (let i = 0; i < 10; i++) {
//   human.chooseMove();
// }
// console.log(human.moveHistory);
// TEST PASSED

function createComputer() {
  const weights = {
    [ROCK]:     5,
    [SCISSORS]: 5,
    [PAPER]:    5,
    [SPOCK]:    5,
    [LIZARD]:   5, 
  }

  const newPlayer = createPlayer();
  const newComputer = {
    chooseMove() {
      const sumWeights = Object.values(weights).reduce((prev, curr) => prev + curr);

      let rand = Math.floor(Math.random() * sumWeights);
      for (let choice in weights) {
        const currentWeight = weights[choice];
        if (rand < currentWeight) {
          this.moveHistory.push(choice);
          return;
        }
        rand -= currentWeight;
      }
    },

    adjustWeights() {},
  };

  return Object.assign(newComputer, newPlayer);
}

// const comp = createComputer();
// for (let i = 0; i < 10; i++) {
//   comp.chooseMove();
// }
// console.log(comp.moveHistory);
// TEST PASSED












// const readLine = require('readline-sync');

// const MAX_SCORE = 2;

// const ROCK = 'rock';
// const PAPER = 'paper';
// const SCISSORS = 'scissors';
// const SPOCK = 'spock';
// const LIZARD = 'lizard';
// const VALID_MOVES = [ROCK, PAPER, SCISSORS, SPOCK, LIZARD];

// const WINNING_COMBOS = {
//   [ROCK]:     [SCISSORS, LIZARD],
//   [PAPER]:    [ROCK, SPOCK],
//   [SCISSORS]: [PAPER, LIZARD],
//   [SPOCK]:    [SCISSORS, ROCK],
//   [LIZARD]:   [PAPER, SPOCK],
// };

// function createPlayer() {
//   const newPlayer = { 
//     wins: 0,
//     move: null,
//     history: [],

//     incrementWins() { this.wins += 1; },
//     getWins()       { return this.wins; },
//     resetWins()     { this.wins = 0; },
//   };

//   return newPlayer;
// }

// function createHuman() {
//   const newPlayer = createPlayer();

//   const newHuman = {
//     choose() {
//       let choice = promptUser(`Please choose 'rock', 'paper', 'scissors', 'spock' or 'lizard'`).toLowerCase();

//       while (true) {
//         if (VALID_MOVES.includes(choice)) break;
//         console.log(`${drawPrompt()} Sorry, invalid choice.`);
//         choice = promptUser(`Please choose 'rock', 'paper', 'scissors', 'spock' or 'lizard'`).toLowerCase();
//       }

//       this.move = choice;
//     },
//   };

//   return Object.assign(newPlayer, newHuman);
// }

// function createComputer() {
//   const newPlayer = createPlayer();
//   const newComputer = {
//     choose() {
//       const randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
//       this.move = VALID_MOVES[randomIndex];
//     },
//   };

//   return Object.assign(newPlayer, newComputer);
// }

// function createMove() {
//   const newMove = {};

//   return newMove;
// }

// function createRule() {
//   const newRule = {};

//   return newRule;
// }

// const compare = function(move1, move2) {};



// const RPSGame = {
//   human:    createHuman(),
//   computer: createComputer(),
//   roundWinner: null,
//   higherWinCount: {},

//   displayWelcomeMessage() {
//     console.clear();
//     console.log(`-----------------------------------`);
//     console.log(` Welcome to Rock, Paper, Scissors!`);
//     console.log(`  Hit 'enter' to begin the game.`);
//     console.log(`-----------------------------------`);
//     readLine.prompt();
//     console.clear();
//   },

//   displayGoodbyeMessage() {
//     console.log(`--------------------------------`);
//     console.log(`     Thanks for playing!`);
//     console.log(`--------------------------------`);
//   },

//   displayMoves() {
//     const humanMove = this.human.move;
//     const computerMove = this.computer.move;

//     console.clear();
//     console.log(`--------------------------------`);
//     console.log(`You chose ${humanMove}.`);
//     console.log(`Computer chose ${computerMove}.`);
//     console.log(`--------------------------------`);
//     console.log(``);
//   },

//   determineWinner() {
//     const humanMove = this.human.move;
//     const computerMove = this.computer.move;

//     if (humanMove === computerMove) this.roundWinner = 'draw';
//     if (WINNING_COMBOS[humanMove].includes(computerMove)) this.roundWinner = 'player';
//     if (WINNING_COMBOS[computerMove].includes(humanMove)) this.roundWinner = 'computer'; 
//   },

//   updatePlayerWins() {
//     const currentWinner = this.roundWinner;
//     if (currentWinner === 'player') this.human.incrementWins();
//     if (currentWinner === 'computer') this.computer.incrementWins();
//   },

//   updateHighestWins() {
//     const playerWins = this.human.getWins();
//     const computerWins = this.computer.getWins();
//     if (playerWins < computerWins) this.higherWinCount = {computer: computerWins};
//     else this.higherWinCount = {player: playerWins};
//   },

//   reportWinCount() {
//     console.log(`You have ${this.human.getWins()} wins.`);
//     console.log(`Computer has ${this.computer.getWins()} wins.`);
//     console.log(``);
//   },

//   generateWinningMessage() {
//     switch(this.roundWinner) {
//       case 'draw':      return `It's a draw!`;
//       case 'player':    return `Congratulations, you win!`;
//       case 'computer':  return `Computer wins!`;
//       default:          return `Winner is indeterminate.`;
//     }
//   },

  
//   playAgain() {
//     console.log(``);
//     let again = promptUser(`Would you like to play again? (y/n)`);
//     return again.toLowerCase()[0] === `y`;
//   },
  
//   winnerFound() {
//     return Object.values(this.higherWinCount)[0] >= MAX_SCORE;
//   },
  
//   displayGameWinner() {
//     console.clear();
//     const winner = Object.keys(this.higherWinCount);
//     if (winner[0] === 'player') console.log(`Player wins!`);
//     else console.log(`Computer wins!`);
//     console.log(``);
//   },

//   playRound() {
//     this.human.choose();
//     this.computer.choose();

//     this.displayMoves();
//     this.determineWinner();
//     this.updatePlayerWins();
//     this.updateHighestWins();

//     console.log(this.generateWinningMessage());
//     this.reportWinCount();
//   },

//   resetGame() {
//     this.human.resetWins();
//     this.computer.resetWins();
//   },
 
//   play() {
//     this.displayWelcomeMessage();

//     do {
//       this.resetGame();
//       do    { this.playRound(); }
//       while (!this.winnerFound());
//     } while (this.playAgain());

//     this.displayGameWinner();
//     this.displayGoodbyeMessage();
//   },
// };


// RPSGame.play();

// function promptUser(question) {
//   return readLine.question(`${drawPrompt()} ${question}: `);
// }

// function drawPrompt() {
//   return `=>`
// }