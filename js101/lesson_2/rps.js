// Build a Rock Paper Scissors game.
// Our version of the game lets the user play
// against the computer.

const readLine = require('../../node_modules/readline-sync');

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const SPOCK = 'spock';
const LIZARD = 'lizard';
const PRINT_CHOICES = [ROCK, PAPER, SCISSORS, SPOCK, LIZARD];

const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'].concat(PRINT_CHOICES);
const VALID_OUTCOMES = [`draw`, `player`, `computer`];

const WINNING_COMBOS = {
  [ROCK]:     [SCISSORS, LIZARD],
  [PAPER]:    [ROCK, SPOCK],
  [SCISSORS]: [PAPER, LIZARD],
  [SPOCK]:    [SCISSORS, ROCK],
  [LIZARD]:   [PAPER, SPOCK],
};

const CODE_MAP = {
  [ROCK]: ['r'],
  [PAPER]: ['p'],
  [SCISSORS]: ['sc', 'c'],
  [SPOCK]: ['sp', 'p'],
  [LIZARD]: ['l'],
};


welcomeUser();

do {
  const playerChoice = getPlayerChoice(`Choose one: ${PRINT_CHOICES.join(', ')}.`);
  const computerChoice = getComputerChoice();

  reportChoices(playerChoice, computerChoice);

  const winner = determineWinner(playerChoice, computerChoice);
  console.log(formatWinner(winner));

} while (askUser(`Play again? (y/n)`));

farewellUser();


function welcomeUser() {
  console.log(`Welcome to Rock Paper Scissors Spock Lizard!\n`);
}

function farewellUser() {
  console.log(`Bye! Play again sometime!\n`);
}

function getPlayerChoice(message) {
  let choice = readLine.question(`${drawPrompt()} ${message}\n`);

  while (!validChoice(choice)) {
    choice = readLine.question(`${drawPrompt()} Sorry, we need one of '${PRINT_CHOICES.join(', ')}.'\n`);
  }

  return formatChoice(choice);
}

function validChoice(choice) {
  choice = choice.toLowerCase();
  return VALID_CHOICES.includes(choice);
}

function formatChoice(choice) {
  for (let property in CODE_MAP) {
    if (CODE_MAP[property].includes(choice)) {
      return property;
    }
  }

  return choice;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * PRINT_CHOICES.length);
  return PRINT_CHOICES[randomIndex];
}

function reportChoices(player, computer) {
  console.log(`${drawPrompt()} You chose ${player} and the computer chose ${computer}.\n`);
}

function determineWinner(playerChoice, computerChoice) {
  const tie = playerChoice === computerChoice;

  if (tie) {
    return VALID_OUTCOMES[0];
  } else if (playerWins(playerChoice, computerChoice)) {
    return VALID_OUTCOMES[1];
  } else if (playerWins(computerChoice, playerChoice)) {
    return VALID_OUTCOMES[2];
  } else {
    return `Invalid game combination.`
            + `\n Check your input validation:`
            + `\n playerChoice: ${playerChoice}`
            + `\n computerChoice: ${computerChoice}`;
  }
}

function playerWins(choice1, choice2) {
  return WINNING_COMBOS[choice1].includes(choice2);
}

function formatWinner(winner) {
  switch (winner) {
    case VALID_OUTCOMES[0]: return `It's a tie!`;
    case VALID_OUTCOMES[1]: return `Congratulations, you win!`;
    case VALID_OUTCOMES[2]: return `Computer wins!`;
    default: return `${winner}`;
  }
}


function askUser(message) {
  let answer = readLine.question(`${drawPrompt()} ${message}\n`).toLowerCase();

  while (!validResponse(answer)) {
    answer = readLine.question(`${drawPrompt()} ${message}\n`).toLowerCase();
  }

  return answer[0] !== 'n';
}

function validResponse(answer) {
  const validAnswers = ['yes', 'y', 'yea', 'yeah', 'yep', 'no', 'n', 'nah', 'nope'];
  return validAnswers.includes(answer);
}

function drawPrompt() {
  return '=>';
}

