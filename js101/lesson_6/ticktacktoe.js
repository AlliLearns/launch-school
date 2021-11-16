const readLine = require('../../node_modules/readline-sync');
const BOARD_SIZE = 3;
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const FULL = 'fullBoard';

greetUser();
runGame();
farewellUser();

function greetUser() {
  // TODO
}

function runGame() {
  let again = false;

  do {
    const board = initGameState();
    drawGame(board);

    runGameLoop(board);

    again = shouldGoAgain("Play again? (y/n)");

    console.log('\n\n');
  } while (again)
}

function farewellUser() {
  // TODO
}

function initGameState() {
  const newBoard = new Array(BOARD_SIZE);

  for (let i = 0; i < BOARD_SIZE; i++) {
    newBoard[i] = new Array(BOARD_SIZE);

    for (let j = 0; j < BOARD_SIZE; j++) {
      let squareCount = i * BOARD_SIZE + j + 1;
      newBoard[i][j] = String(squareCount);
    }
  }

  return newBoard;
}

function drawGame(board) {
  const emptyLine = new Array(3).fill(' ');
  console.log('');
  console.log(generateColumnLine(emptyLine));
  console.log(generateColumnLine(board[0]));
  console.log(generateColumnLine(emptyLine));
  console.log(generateSeparatorLine());
  console.log(generateColumnLine(emptyLine));
  console.log(generateColumnLine(board[1]));
  console.log(generateColumnLine(emptyLine));
  console.log(generateSeparatorLine());
  console.log(generateColumnLine(emptyLine));
  console.log(generateColumnLine(board[2]));
  console.log(generateColumnLine(emptyLine));
  console.log('');
}
  
function generateColumnLine(values) {
  return `    ${values[0]}    |    ${values[1]}    |    ${values[2]}    `;
}

function generateSeparatorLine() {
  return ` ------- + ------- + -------`
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

function isANumber(val) {
  return val !== '' || !Number.isNaN(Number(val));
}

function withinRange(val, max) {
  val = Number(val);
  return val >= 1 && val <= max;
}

function slotTaken(board, val) {
  return !board.some(arr => arr.includes(val));
}

function updateGameState(board, choice, marker) {
  board.forEach(arr => {
    if (arr.includes(choice)) {
      let index = arr.indexOf(choice);
      arr[index] = marker;
    }
  });
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