// Build a Rock Paper Scissors game. 
// Our version of the game lets the user play 
// against the computer. 

const readLine = require('../../node_modules/readline-sync');

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const VALID_CHOICES = [ROCK, PAPER, SCISSORS];
const VALID_OUTCOMES = [`draw`, `player`, `computer`];

playGame();

function playGame() {
  const playerChoice = getPlayerChoice(`Choose one: ${VALID_CHOICES.join(', ')}.`);
  const computerChoice = getComputerChoice();

  reportChoices(playerChoice, computerChoice);

  const winner = determineWinner(playerChoice, computerChoice);
  console.log(formatWinner(winner));
  
}

function getPlayerChoice(message) {
  let choice = readLine.question(`${drawPrompt()} ${message}\n`);
  
  while (!validChoice(choice)) {
    choice = readLine.question(`${drawPrompt()} Sorry, we need one of '${VALID_CHOICES.join(', ')}.'\n`);
  }
  
  return choice.toLowerCase();
}

function validChoice(choice) {
  choice = choice.toLowerCase();  
  return VALID_CHOICES.includes(choice);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function reportChoices(player, computer) {
  console.log(`${drawPrompt()} You chose ${player} and the computer chose ${computer}`);
}

function determineWinner(playerChoice, computerChoice) {
  const tie = playerChoice === computerChoice;

  const playerBeatsScissors = playerChoice === ROCK && computerChoice === SCISSORS;
  const playerBeatsPaper = playerChoice === SCISSORS && computerChoice === PAPER;
  const playerBeatsRock = playerChoice === PAPER && computerChoice === ROCK;

  const computerBeatsScissors = computerChoice === ROCK && playerChoice === SCISSORS;
  const computerBeatsPaper = computerChoice === SCISSORS && playerChoice === PAPER;
  const computerBeatsRock = computerChoice === PAPER && playerChoice === ROCK;

  if (tie) {
    return VALID_OUTCOMES[0];
  } else if (playerBeatsScissors || playerBeatsPaper || playerBeatsRock) {
    return VALID_OUTCOMES[1];
  } else if (computerBeatsScissors || computerBeatsPaper || computerBeatsRock) {
    return VALID_OUTCOMES[2];
  } else {
    return `Invalid game combination.`
            + `\n Check your input validation:`
            + `\n playerChoice: ${playerChoice}`
            + `\n computerChoice: ${computerChoice}`;
  }
}

function formatWinner(winner) {
  switch (winner) {
    case VALID_OUTCOMES[0]: return `It's a tie!`;
    case VALID_OUTCOMES[1]: return `Congratulations, you win!`;
    case VALID_OUTCOMES[2]: return `Computer wins!`;
    default: return `${winner}`;
  }
}

function drawPrompt() {
  return '=>';
}

