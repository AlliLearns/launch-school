// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readLine = require('../../node_modules/readline-sync');
const MESSAGES = require('./calculator_messages.json');

const VALID_OPERATORS = ['1', '2', '3', '4', '+', '-', '*', '/'];
const VALID_LANGUAGE_CODES = ['en', 'es'];

const langChoice = getLanguageChoice();
greetUser();


do {
  const [number1, number2, operator] = getUserInput();
  const result = performOperation(number1, number2, operator);
  printResult(result);

} while (askUser(MESSAGES[langChoice].another));


farewellUser();


function getLanguageChoice() {
  let lang = readLine.question(`${drawPrompt()} ${MESSAGES.promptLanguage}\n`);

  while (invalidLanguage(lang)) {
    lang = readLine.question(`${drawPrompt()}`
                              + ` Sorry, we don't recognize that language.\n`
                              + `${drawPrompt()} ${MESSAGES.promptLanguage}\n`);
  }

  return lang.toLowerCase();
}

function invalidLanguage(code) {
  code = code.toLowerCase();
  return !VALID_LANGUAGE_CODES.includes(code);
}

function greetUser() {
  console.log(MESSAGES[langChoice].welcome);
}

function farewellUser() {
  console.log(MESSAGES[langChoice].farewell);
}

function getUserInput() {
  const number1 = promptNumber(MESSAGES[langChoice].firstNum);
  const number2 = promptNumber(MESSAGES[langChoice].secondNum);
  const operation = promptOperation(MESSAGES[langChoice].operation);

  return [number1, number2, operation];
}

function promptNumber(message) {
  let num = readLine.question(`${drawPrompt()} ${message}\n`);

  while (invalidNumber(num)) {
    num = readLine.question(`${drawPrompt()} ${MESSAGES[langChoice].numAgain}\n`);
  }

  return Number(num);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

function promptOperation(message) {
  let operation = readLine.question(`${drawPrompt()} ${message}\n`);

  while (!VALID_OPERATORS.includes(operation)) {
    operation = readLine.question(`${drawPrompt()} ${MESSAGES[langChoice].opAgain}\n`);
  }

  return Number(translateOperator(operation));
}

function translateOperator(operator) {
  switch (operator) {
    case '+': return '1';
    case '-': return '2';
    case '*': return '3';
    case '/': return '4';
    default:  return operator;
  }
}

function performOperation(num1, num2, operation) {
  switch (operation) {
    case 1: return num1 + num2;
    case 2: return num1 - num2;
    case 3: return num1 * num2;
    case 4: return num1 / num2;
    default: return "Invalid operation.";
  }
}

function printResult(result) {
  console.log(`The result is: ${result}.`);
}


function askUser(message) {
  let answer = readLine.question(`${drawPrompt()} ${message}\n`).toLowerCase();

  while (!validResponse(answer)) {
    answer = readLine.question(`${drawPrompt()} ${MESSAGES[langChoice].askAgain}\n`).toLowerCase();
  }

  return answer[0] !== 'n';
}

function validResponse(answer) {
  const englishAnswers = ['yes', 'y', 'yea', 'yeah', 'yep', 'no', 'n', 'nah', 'nope'];
  const spanishAnswers = ['si', 's', 'no', 'n'];
  return englishAnswers.includes(answer) || spanishAnswers.includes(answer);
}

function drawPrompt() {
  return ">>";
}

