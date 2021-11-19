const readLine = require('readline-sync');

const WINS_NEEDED = 3;
const BEST_OF = 5;

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


greetUser();
runGame();
farewellUser();


function greetUser() {
  printHeader(`Welcome to Rock Paper Scissors Spock Lizard!`);
  waitForUser(`Press 'enter' to play!`);
}

function farewellUser() {
  printHeader(`Bye! Play again sometime!`);
}

function printHeader(message) {
  const border = `=`.repeat(message.length);

  console.clear();
  console.log(border);
  console.log(message);
  console.log(border);
  console.log(``);
}

function waitForUser(message) {
  console.log(`\n`);
  readLine.question(message);
  console.clear();
}

function runGame() {
  do {
    console.clear();
    const roundOutcomes = [];

    while (!gameWon(roundOutcomes)) {
      informUser(`Round ${roundOutcomes.length + 1}.`);
  
      const [playerEntry, computerEntry] = getRoundEntries()

      console.clear();

      reportChoices(playerEntry, computerEntry);
      playRound(roundOutcomes, playerEntry, computerEntry);
      reportGameStatus(roundOutcomes);
    }
  
    const winner = generateWinningMessage(roundOutcomes);   
    informUser(winner);

  } while (shouldGoAgain(`Play again? (y / n)`));
}

function getRoundEntries() {
  const playerEntry = getPlayerChoice(`Choose one: ${PRINT_CHOICES.join(', ')}`);
  const computerEntry = getComputerChoice();

  return [playerEntry, computerEntry];
}

function playRound(roundOutcomes, playerEntry, computerEntry) {
  const outcome = getRoundOutcome(playerEntry, computerEntry);
  informUser(formatRoundWinner(outcome));
  console.log(`\n`);

  roundOutcomes.push(outcome);
}

function getPlayerChoice(message) {
  let choice = getUserInput(`${message}`);

  while (!validEntry(choice)) {
    choice = getUserInput(`Sorry, we need one of '${PRINT_CHOICES.join(', ')}'`);
  }

  return formatEntry(choice);
}

function validEntry(choice) {
  choice = choice.toLowerCase();
  return VALID_CHOICES.includes(choice);
}

function formatEntry(choice) {
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
  console.log(``);
  informUser(`You chose ${player} and the computer chose ${computer}.`);
}

function getRoundOutcome(playerEntry, computerEntry) {
  const tie = playerEntry === computerEntry;

  if (tie) {
    return VALID_OUTCOMES[0];
  } else if (decideRoundWinner(playerEntry, computerEntry)) {
    return VALID_OUTCOMES[1];
  } else if (decideRoundWinner(computerEntry, playerEntry)) {
    return VALID_OUTCOMES[2];
  } else {
    return `Invalid game combination.`
            + `\n Check your input validation:`
            + `\n playerChoice: ${playerEntry}`
            + `\n computerChoice: ${computerEntry}`;
  }
}

function decideRoundWinner(choice1, choice2) {
  return WINNING_COMBOS[choice1].includes(choice2);
}

function formatRoundWinner(winner) {
  switch (winner) {
    case VALID_OUTCOMES[0]: return `It's a tie!`;
    case VALID_OUTCOMES[1]: return `Congratulations, you win!`;
    case VALID_OUTCOMES[2]: return `Computer wins!`;
    default: return `${winner}`;
  }
}

function reportGameStatus(roundOutcomes) {
  const [playerWinCount, computerWinCount] = countWins(roundOutcomes);

  informUser(`You have best ${playerWinCount} out of ${BEST_OF}.`);
  informUser(`Computer has best ${computerWinCount} out of ${BEST_OF}.`);
  console.log(`\n`);
}

function gameWon(roundOutcomes) {
  const [playerWinCount, computerWinCount] = countWins(roundOutcomes);

  return playerWinCount >= WINS_NEEDED || computerWinCount >= WINS_NEEDED;
}

function countWins(roundOutcomes) {
  let playerWinCount = 0;
  let computerWinCount = 0;

  roundOutcomes.forEach(outcome => {
    if (outcome === VALID_OUTCOMES[1]) playerWinCount += 1;
    if (outcome === VALID_OUTCOMES[2]) computerWinCount += 1;
  })

  return [playerWinCount, computerWinCount];
}

function generateWinningMessage(roundOutcomes) {
  const [playerWinCount, computerWinCount] = countWins(roundOutcomes);
  const playerWon = playerWinCount > computerWinCount;

  switch (playerWon) {
    case true:  return `Yay! You won the game!`;
    case false: return `Computer won best ${WINS_NEEDED} out of ${BEST_OF} rounds.`;
    default:    return `Invalid winner, something went wrong.`;
  }
}


function shouldGoAgain(message) {
  const validAnswers = ['yes', 'y', 'yea', 'yeah', 'yep', 'no', 'n', 'nah', 'nope'];
  let answer = getUserInput(message).toLowerCase();

  while (!validateAnswer(answer, validAnswers)) {
    answer = getUserInput(`Type 'y' or 'n'`).toLowerCase();
  }

  return answer[0] === 'y';
}

function validateAnswer(answer, acceptedAnswers) {
  return acceptedAnswers.includes(answer);
}

function getUserInput(message) {
  return readLine.question(`${drawPrompt()} ${message}: `);
}

function informUser(message) {
  console.log(`${drawPrompt()} ${message}`);
}

function drawPrompt() {
  return '>>>>';
}

