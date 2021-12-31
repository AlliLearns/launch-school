// Bonus features
// Keep score. Whoever reaches 5 points first wins. 
// Add Lizard and Spock. 
// Keep track of a history of moves
// Adjust computer choice based on history. 

const readLine = require('readline-sync');

function createPlayer() {
  const newPlayer = {
    move: null,
  };

  return newPlayer;
}

function createHuman() {
  const playerObject = createPlayer();
  const newHuman = {
    choose() {
      let choice;
      while (true) {
        console.log('Please choose rock, paper or scissors:');
        choice = readLine.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, newHuman);
}

function createComputer() {
  const playerObject = createPlayer();
  const newComputer = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, newComputer);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

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
    console.log('Would you like to play again? (y/n');
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

RPSGame.play();

