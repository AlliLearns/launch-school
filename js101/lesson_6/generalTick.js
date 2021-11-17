const readLine = require('../../node_modules/readline-sync');
const PLAYER_MARKER = '[X]';
const COMPUTER_MARKER = '[O]';
const FULL = 'fullBoard';


greetUser();
runGame();
farewellUser();

function greetUser() {
  printHeader("Welcome to Tic-Tac-Toe!");
  waitForUser("Hit 'enter' to play.");
}


function farewellUser() {
  console.log(`\n`);
  printHeader("Thanks for playing!");
}

function printHeader(message) {
  const border = `-`.repeat(message.length);

  console.clear();
  console.log(border);
  console.log(message);
  console.log(border);
}

function waitForUser(message) {
  console.log(`\n`);
  readLine.question(message);
  console.clear();
}


function runGame() {
  let playAgain = false;

  do {
    const gameSize = promptForGridSize(`How large should the board be? \
                                      \n${drawPrompt()} Please provide a length between 3 and 10 \
                                      \n${drawPrompt()} (Invalid input will default to 3)`)

    const board = initGameState(gameSize);
    drawGame(board);

    runGameLoop(board);

    playAgain = shouldGoAgain("Play again? (y/n)");

    console.log('\n\n');

  } while(playAgain)
}

function promptForGridSize(question) {
  let gridSize = prompt(question);
  gridSize = validateGameSize(gridSize);
  return Number(gridSize);
}

function validateGameSize(size) {
  const num = Number(size);
  if (!isANumber(size) || num < 3 || num > 10) return 3;
  return size;
}

function isANumber(str) {
  return str.trim() !== '' || !Number.isNaN(Number(str));
}

function initGameState(length = 3) {
  let state = new Array(length);
  for (let i = 0; i < length; i++) {
    state[i] = new Array(length);
    for (let j = 0; j < length; j++) {
      state[i][j] = String((i * length) + j + 1);
    }
  }

  return state;
}

function updateGameState(board, choice, marker) {
  board.forEach(arr => {
    if (arr.includes(choice)) {
      let index = arr.indexOf(choice);
      arr[index] = marker;
    }
  });
}

function drawGame(board) {
  console.log(`\n`);
  console.log(`You are ${PLAYER_MARKER} and computer is ${COMPUTER_MARKER}`);
  console.log(`\n`);
  const length = board.length;
  drawEntryRow(board[0]);

  for (let i = 0; i < length - 1; i++) {
    drawSeparatorLine(length);
    drawEntryRow(board[i + 1]);
  }
  console.log(`\n`);
}

function drawEntryRow(board) {
  drawEmptyLine(board.length);
  drawValueLine(board)
  drawEmptyLine(board.length);
}

function drawEmptyLine(length) {
  let column = generateEntryRow().repeat(length);
  column = column.slice(0, column.length - 1);
  console.log(column);
}

function drawValueLine(gameState) {
  const length = gameState.length;
  let column = '';
  for (let i = 0; i < length; i++) {
    column += generateEntryRow(gameState[i]);
  }

  column = column.slice(0, column.length - 1);
  console.log(column);
}

function generateEntryRow(entry = ' ') {
  const len = generateSeparator().length;
  const padVal = Math.ceil(len / 2) + 1;

  return `${entry.padStart(padVal).padEnd(len - 1)}|`;
}

function drawSeparatorLine(length) {
  let row = generateSeparator().repeat(length);
  row = row.slice(0, row.length - 1);
  console.log(row);
}

function generateSeparator() {
  return ` ${'-'.repeat(7)} +`
}

function runGameLoop(board) {
  while (!winnerFound(board) && !boardFilled(board)) {
    console.clear();
    drawGame(board);

    playerTurn(board);

    if (winnerFound(board) || boardFilled(board)) break;

    computerTurn(board);
  }

  const winningMarker = getWinner(board);
  let winnerMessage = getWinnerMessage(winningMarker);

  console.clear();
  drawGame(board);
  console.log(`\n${drawPrompt()} ${winnerMessage}\n\n`);
}

function playerTurn(board) {
  const playerChoice = playerTakeTurn(board, "Select your square");
  updateGameState(board, playerChoice, PLAYER_MARKER);
}

function playerTakeTurn(board, message) {
  let choice = prompt(message);

  while (!validChoice(board, choice)) {
    choice = prompt("Taken or invalid, choose again");
  }
  
  choice = choice.trim();
  return choice;
}

function computerTurn(board) {
  const computerChoice = computerTakeTurn(board);
  updateGameState(board, computerChoice, COMPUTER_MARKER);
}

function computerTakeTurn(board) {
  let choice = String(Math.floor(Math.random() * (board.length ** 2)) + 1);

  while (slotTaken(board, choice)) {
    choice = String(Math.floor(Math.random() * (board.length ** 2)) + 1);
  }

  return choice;
}

function validChoice(board, choice) {
  choice = choice.trim();
  let max = board.length ** 2;

  if (!isANumber(choice))        return false;
  if (!withinRange(choice, max)) return false;
  if (slotTaken(board, choice))  return false;

  return true;
}

function isANumber(str) {
  return str.trim() !== '' || !Number.isNaN(Number(str));
}

function withinRange(val, max) {
  val = Number(val);
  return val >= 1 && val <= max;
}

function slotTaken(board, val) {
  return !board.some(arr => arr.includes(val));
}

function winnerFound(board) {
  if (checkForWinningRow(board)) return true;
  if (checkForWinningColumn(board)) return true;
  if (checkForWinningDiagonal(board)) return true;

  return false;
} 

function checkForWinningRow(board) {
  for (let i = 0; i < board.length; i++) {
    let initialMarker = board[i][0];
    if (board[i].every(elem => elem === initialMarker)) {
      return initialMarker
    }
  }

  return null;
}

function checkForWinningColumn(board) {
  for (let i = 0; i < board.length; i++) {
    let columnValues = [];
    let initialMarker = board[0][i];
    for (let j = 0; j < board.length; j++) {
      columnValues.push(board[j][i]);
    }
    
    if (columnValues.every(elem => elem === initialMarker)) {
      return initialMarker;
    }
  }
  
  return null;
}

function checkForWinningDiagonal(board) {
  let frontDiagonal = [];
  let initialMarker = board[0][0];

  for (let i = 0; i < board.length; i++) {
    frontDiagonal.push(board[i][i]);
  }

  if (frontDiagonal.every(elem => elem === initialMarker)) {
    return initialMarker;
  }


  let backDiagonal = [];
  initialMarker = board[0][board.length - 1];

  for (let i = 0; i < board.length; i++) {
    let fromBack = board.length - 1 - i;
    backDiagonal.push(board[i][fromBack]);
  }

  if (backDiagonal.every(elem => elem === initialMarker)) {
    return initialMarker;
  }

  return null;
}

function boardFilled(board) {
  for (let i = 1; i <= board.length ** 2; i++) {
    if (!slotTaken(board, String(i))) return false;
  }

  return true;
}

function getWinner(board) {
  let winner = "";

  if (boardFilled(board)) return FULL;

  winner = checkForWinningDiagonal(board);
  if (winner !== null) return winner;

  winner = checkForWinningRow(board);
  if (winner !== null) return winner;

  winner = checkForWinningColumn(board);
  if (winner !== null) return winner;

  return winner;
}

function getWinnerMessage(marker) {
  switch(marker) {
    case PLAYER_MARKER:   return "Player wins!";
    case COMPUTER_MARKER: return "Computer wins.";
    case FULL:            return "Game is a tie!"
    default:              return "Something went wrong";
  }
}

function shouldGoAgain(message) {
  let answer = prompt(message).toLowerCase();

  while (!validResponse(answer)) {
    answer = prompt("Please enter 'y' or 'n'").toLowerCase();
  }

  return answer[0] !== 'n';
}

function validResponse(answer) {
  const acceptedAnswer = ['yes', 'y', 'yea', 'yeah', 'yep', 'no', 'n', 'nah', 'nope'];
  return acceptedAnswer.includes(answer);
}

function prompt(message) {
  return readLine.question(`${drawPrompt()} ${message}: `);
}

function drawPrompt() {
  return `>>`;
}