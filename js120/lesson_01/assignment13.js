// Bonus features
// Keep track of a history of moves
// Adjust computer choice based on history. 

const readLine = require('readline-sync');

// const DEFAULT_ROUNDS = 3; 
const MAX_SCORE = 1; 

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const SPOCK = 'spock';
const LIZARD = 'lizard';
const MOVES = [ROCK, PAPER, SCISSORS, SPOCK, LIZARD];

const VALID_OUTCOMES = [`draw`, `Player`, `Computer`];

const WINNING_COMBOS = {
  [ROCK]:     [SCISSORS, LIZARD],
  [PAPER]:    [ROCK, SPOCK],
  [SCISSORS]: [PAPER, LIZARD],
  [SPOCK]:    [SCISSORS, ROCK],
  [LIZARD]:   [PAPER, SPOCK],
};


const RPSGame = {
  human:    createHuman(),
  computer: createComputer(),
  maxScore: MAX_SCORE,
  gameWinner: '',

  displayWelcomeMessage() { console.log("Welcome to Rock, Paper, Scissors!") },
  displayGoodbyeMessage() { console.log("Thanks for playing!") },

  promptForMaxScore() {
    let score = prompt("Enter a number for the max score\n" + 
                       "(Hit 'enter' to play 1 round)");

    if (score === ''.trim()) return;

    while (true) {
      const numberScore = Number(score);
      if (!Number.isNaN(numberScore) && numberScore > 0) break;
      score = prompt("Sorry, we need a positive integer");
    }

    this.maxScore = Number(score);
  },

  displayPlayerChoices() {
    console.log(`${drawPrompt()} Player chose: ${this.human.move}.`);
    console.log(`${drawPrompt()} Computer chose: ${this.computer.move}.`);
  },

  determineRoundWinner() {
    const choice1 = this.human.move;
    const choice2 = this.computer.move;

    const tie      = choice1 === choice2;
    const human    = WINNING_COMBOS[choice1].includes(choice2);
    const computer = WINNING_COMBOS[choice2].includes(choice1);
;
    if      (human)    this.human.incrementWins();
    else if (computer) this.computer.incrementWins();

    if      (tie)      return VALID_OUTCOMES[0];
    else if (human)    return VALID_OUTCOMES[1];
    else if (computer) return VALID_OUTCOMES[2];
    else {
      return `Invalid game combination.`
      + `\n Check your input validation:`
      + `\n playerChoice: ${playerEntry}`
      + `\n computerChoice: ${computerEntry}`;
    }
  },

  makeRoundWinningMessage() {
    const winner = this.determineRoundWinner();
    switch (winner) {
    case VALID_OUTCOMES[0]: return `It's a tie!`;
    case VALID_OUTCOMES[1]: return `Congratulations, you win!`;
    case VALID_OUTCOMES[2]: return `Computer wins!`;
    default: return `${winner}`;
    }
  },

  displayRoundOutcome() {
    console.log(`Player has won ${this.human.wins} round(s) and ` +
                `Computer has won ${this.computer.wins} round(s).\n`);
  },

  displayGameOutcome() {
    console.log(`${drawPrompt()} Game decided!\n` + 
                `Player had ${this.human.wins} win(s) and ` + 
                `Computer had ${this.computer.wins} win(s).\n` + 
                `${this.gameWinner} wins the game!\n`);
  },

  playAgain() {
    const validAnswers = ['yes', 'y', 'yea', 'yeah', 'yep', 'no', 'n', 'nah', 'nope'];
    let again = prompt('Would you like to play again? (y/n)').toLowerCase();

    while (true) {
      if (validAnswers.includes(again)) break;
      again = prompt("Sorry, please choose 'y' or 'n'").toLowerCase();
    }

    return again.toLowerCase()[0] === 'y';
  },

  resetGame() {
    this.human.resetWins();
    this.computer.resetWins();
  },


  playRounds() {
    while (true) {
      this.human.chooseMove();
      this.computer.chooseMove();
      console.clear();
      this.displayPlayerChoices();
      console.log(this.makeRoundWinningMessage());
      this.displayRoundOutcome();

      const done = this.human.wins >= this.maxScore ||
                   this.computer.wins >= this.maxScore;
      if (done) break;
    }

    if (this.human.wins >= this.maxScore) {
      this.gameWinner = VALID_OUTCOMES[1];
    } else if (this.computer.wins >= this.maxScore) {
      this.gameWinner = VALID_OUTCOMES[2];
    } 
    console.clear();
  },

  play() {
    console.clear();
    this.displayWelcomeMessage();
    readLine.question("Press 'enter' to play!");
    
    while (true) {
      this.resetGame();
      console.clear();
      this.promptForMaxScore();
      console.clear();
      this.playRounds();
      this.displayGameOutcome();
      if (!this.playAgain()) break;
    }

    console.clear();
    this.displayGoodbyeMessage();
  },
}

function createHuman() {
  const playerObj = createPlayer();
  const newHuman = {
    chooseMove() {
      let choice = prompt(`Please choose one of: ${MOVES.join(' ')}`).toLowerCase();

      while (true) {
        if (MOVES.includes(choice)) break;
        console.log("Sorry, invalid choice.");
        choice = prompt(`Please choose one of: ${MOVES.join(' ')}`).toLowerCase();
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObj, newHuman);
}

function createComputer() {
  const playerObj = createPlayer();
  const newComputer = {
    chooseMove() {
      let randomIndex = Math.floor(Math.random() * MOVES.length);
      this.move = MOVES[randomIndex];
    },
  };

  return Object.assign(playerObj, newComputer);
}

function createPlayer() {
  const newPlayer = { 
    move: null,
    wins: 0,
    incrementWins() { this.wins += 1 },
    resetWins()     { this.wins = 0 },
  };

  return newPlayer;
}

function prompt(question) {
  return readLine.question(`${drawPrompt()} ${question}: `);
}

function drawPrompt() {
  return '>>>>';
}



RPSGame.play();
