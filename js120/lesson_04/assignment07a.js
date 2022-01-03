// RPS with constructors and prototypes
// Write a constructor function for each factory function 
// Move the initialization code from the factory function into the constructor
// Move all other methods from the factory function into the constructor's prototype
// Replace the factory function invocations with constructor calls.

const readLine = require('readline-sync');

function Player() { this.move = null }

// function Human() { Player.call(this) }
function Human() {}
Human.prototype = new Player();
Human.prototype.constructor = Human;
Human.prototype.choose = function() {
  let choice;
  while (true) {
    console.log("Please choose rock, paper or scissors:");
    choice = readLine.question();
    if (['rock', 'paper', 'scissors'].includes(choice)) break;
    console.log('Sorry, invalid choice.');
  }

  this.move = choice;
};

function Computer() {}
Computer.prototype = new Player();
Computer.prototype.constructor = Computer;
Computer.prototype.choose = function() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  this.move = choices[randomIndex];
};

// We don't actually need a constructor for the
// RPS object, since it's meant to exist as a one-off.
// But we're practicing constructors here, so we'll make one.

function RPSGame() {
  this.human    = new Human();
  this.computer = new Computer();
}

RPSGame.prototype = {
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    const humanMove = this.human.move;
    const computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
        (humanMove === 'paper' && computerMove === 'scissors') ||
        (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie!");
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readLine.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};
RPSGame.prototype.constructor = RPSGame;

const game = new RPSGame();
game.play();
