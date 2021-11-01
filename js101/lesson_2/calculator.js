// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readLine = require('../../node_modules/readline-sync');
const MESSAGES = require('./calculator_messages.json');

const VALID_OPERATORS = ['1', '2', '3', '4', '+', '-', '*', '/'];
const VALID_LANGUAGE_CODES = ['en', 'es', 'english', 'spanish', 'espaniol'];


const langChoice = getLanguageChoice();
greetUser();

do {
  console.log();
  const [number1, number2, operator] = getUserInput();
  const result = performOperation(number1, number2, operator);
  printResult(result);

} while (askUser(MESSAGES[langChoice].askAnotherCalculation));

farewellUser();


function getLanguageChoice() {
  let lang = readLine.question(`${drawPrompt()} ${MESSAGES.promptLanguage}: `);

  while (invalidLanguage(lang)) {
    lang = readLine.question(`${drawPrompt()}`
                              + ` Sorry, we don't recognize that language.\n`
                              + `${drawPrompt()} ${MESSAGES.promptLanguage}: `);
  }

  return lang.toLowerCase();
}

function invalidLanguage(code) {
  code = code.toLowerCase();
  return !VALID_LANGUAGE_CODES.includes(code);
}

function greetUser() {
  console.log(`\n${MESSAGES[langChoice].welcome}`);
}

function farewellUser() {
  console.log(MESSAGES[langChoice].farewell);
}


function getUserInput() {
  const number1 = promptForNumber(MESSAGES[langChoice].firstNum);
  const number2 = promptForNumber(MESSAGES[langChoice].secondNum);
  const operation = promptForOperation(MESSAGES[langChoice].operation);

  return [number1, number2, operation];
}

function promptForNumber(message) {
  let num = readLine.question(`${drawPrompt()} ${message}: `);

  while (invalidNumber(num)) {
    num = readLine.question(`${drawPrompt()} ${MESSAGES[langChoice].askNumAgain}: `);
  }

  return Number(num);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

function promptForOperation(message) {
  let operation = readLine.question(`${drawPrompt()} ${message}: `);

  while (!VALID_OPERATORS.includes(operation)) {
    operation = readLine.question(`${drawPrompt()} ${MESSAGES[langChoice].askOperatorAgain}: `);
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
    case 4: return handleDivideByZero(num1, num2);
    default: return MESSAGES[langChoice].invalidOperation;
  }
}

function handleDivideByZero(num1, num2) {
  if (num2 === 0) { return MESSAGES[langChoice].canNotDivideZero } 
  return num1 / num2;
}

function printResult(result) {
  if (typeof result === 'number') {
    console.log(`\nThe result is: ${result}.\n`);
  } else {
    console.log(`\nSomething went wrong: ${result}.\n`);
  }
}


function askUser(message) {
  let answer = readLine.question(`${drawPrompt()} ${message}: `).toLowerCase();

  while (!validResponse(answer)) {
    answer = readLine.question(`${drawPrompt()} ${MESSAGES[langChoice].askKeepGoingAgain}: `).toLowerCase();
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

