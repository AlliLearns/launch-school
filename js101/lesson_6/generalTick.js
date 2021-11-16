const readLine = require('../../node_modules/readline-sync');
const PLAYER_MARKER = '[X]';
const COMPUTER_MARKER = '[O]';
const FULL = 'TIE';


printWelcome();

let again = false;
do {
  const gridLength = promptForGridSize("How large should the board be? \
                                        \nPlease provide a length between 3 and 10 \
                                        \n(Unrecognized input will default to 3)");
  const board = initGameState(gridLength)
  drawBoard(board);

  playGame(board);

  again = shouldGoAgain("Play again? (y/n)");

  console.log('\n\n');

} while (again)


function playGame(board) {
  while (!winnerFound(board) && !boardFilled(board)) {
    console.clear();
    drawBoard(board);

    let playerChoice = getPlayerEntry(board, "Select your square");
    updateGameState(playerChoice, board, PLAYER_MARKER);
      
    if (winnerFound(board) || boardFilled(board)) break;

    let computerChoice = generateComputerEntry(board);
    updateGameState(computerChoice, board, COMPUTER_MARKER);
  }

  const winningMarker = getWinner(board);
  let winnerMessage = getWinnerMessage(winningMarker);

  console.clear();
  drawBoard(board);
  console.log(`\n${drawPrompt()} ${winnerMessage}\n\n`);
}



function printWelcome() {
 // TODO
}

// Prompt user for size of the game
function promptForGridSize(question) {
  let gridSize = prompt(question);
  gridSize = validateGameSize(gridSize);
  return Number(gridSize);
}

function invalidNumber(input) {
  return Number.isNaN(Number(input));
}

function validateGameSize(input) {
  input = Number(input);
  if (invalidNumber(input) || input < 3 || input > 10) return 3;
  return input;
}

// Game state and drawing the board
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

function updateGameState(slot, state, marker) {
  if (typeof slot === 'undefined') return;

  state.forEach(arr => {
    if (arr.includes(slot)) {
      let index = arr.indexOf(slot);
      arr[index] = marker;
    }
  });
}

function drawBoard(gameState) {
  console.log(`\n`);
  console.log(`You are ${PLAYER_MARKER} and computer is ${COMPUTER_MARKER}`);
  console.log(`\n`);
  const length = gameState.length;
  drawEntriesRow(gameState[0]);

  for (let i = 0; i < length - 1; i++) {
    drawSeparator(length);
    drawEntriesRow(gameState[i + 1]);
  }
  console.log(`\n`);
}

function drawEntriesRow(gameState) {
  drawEmptyEntryRow(gameState.length);
  drawEntryRow(gameState)
  drawEmptyEntryRow(gameState.length);
}

function drawEntryRow(gameState) {
  const length = gameState.length;
  let column = '';
  for (let i = 0; i < length; i++) {
    column += generateEntryRow(gameState[i]);
  }

  column = column.slice(0, column.length - 1);
  console.log(column);
}

function drawEmptyEntryRow(length) {
  let column = generateEntryRow().repeat(length);
  column = column.slice(0, column.length - 1);
  console.log(column);
}

function generateEntryRow(entry = ' ') {
  const len = generateSeparatorRow().length;
  const padVal = Math.ceil(len / 2) + 1;

  return `${entry.padStart(padVal).padEnd(len - 1)}|`;

  // // return `${' '.repeat(3)} ${entry} ${' '.repeat(4 - strEntry.length)}|`;
}

function drawSeparator(length) {
  let row = generateSeparatorRow().repeat(length);
  row = row.slice(0, row.length - 1);
  console.log(row);
}

function generateSeparatorRow() {
  return ` ${'-'.repeat(7)} +`
}

// Get and validate user/computer entries
function getPlayerEntry(gameState, question) {
  let choice = prompt(question);

  while (invalidEntry(choice, gameState)) {
    choice = prompt("Taken or invalid, choose again");
  }

  return choice;
}

function generateComputerEntry(gameState) {
  if (boardFilled(gameState)) return;

  let choice = String(Math.floor(Math.random() * (gameState.length ** 2)) + 1);

  while (invalidEntry(choice, gameState)) {
    choice = String(Math.floor(Math.random() * (gameState.length ** 2)) + 1);
  }

  return choice;
}

function invalidEntry(playerChoice, gameState) {
  if (invalidNumber(playerChoice)) return true;
  if (outsideRange(playerChoice, gameState.length)) return true;
  if (slotTaken(playerChoice, gameState)) return true;
  return false;
}

function outsideRange(playerChoice, boardLength) {
  playerChoice = Number(playerChoice);
  return playerChoice < 1 || playerChoice > boardLength ** 2;
}

function slotTaken(playerChoice, gameState) {
  return !gameState.some(arr => arr.includes(playerChoice));
}

// Looking for a winner or the board filled
function boardFilled(state) {
  for (let i = 1; i <= state.length ** 2; i++) {
    if (!slotTaken(String(i), state)) return false;
  }

  return true;
}

function winnerFound(state) {
  if (checkForWinningDiagonal(state)) return true;
  if (checkForWinningRow(state)) return true;
  if (checkForWinningColumn(state)) return true;

  return false;
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

function checkForWinningRow(gridValues) {
  for (let i = 0; i < gridValues.length; i++) {
    let initialMarker = gridValues[i][0];
    if (gridValues[i].every(elem => elem === initialMarker)) {
      return initialMarker
    }
  }

  return null;
}

function checkForWinningColumn(gridValues) {
  for (let i = 0; i < gridValues.length; i++) {
    let columnValues = [];
    let initialMarker = gridValues[0][i];
    console.log(initialMarker);
    for (let j = 0; j < gridValues.length; j++) {
      columnValues.push(gridValues[j][i]);
    }
    
    console.log(columnValues);
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

// Check if player wants to play another round
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