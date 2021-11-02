// TODO: Move valid answers to the JSON file. 

const readLine = require('../../node_modules/readline-sync');
const MESSAGES = require('./calculator_messages.json');

const VALID_OPERATORS = ['1', '2', '3', '4', '+', '-', '*', '/'];
const VALID_LANGUAGE_CODES = ['en', 'es', 'english', 'spanish', 'espaniol'];


const langChoice = getLanguageChoice();
greetUser();

let keepGoing = false;

do {
  console.log();
  const [number1, number2, operator] = getUserInput();
  const result = performOperation(number1, number2, operator);
  printResult(result);

  keepGoing = shouldGoAgain(MESSAGES[langChoice].askAnotherCalculation);

  console.clear();

} while (keepGoing);

farewellUser();


function getLanguageChoice() {
  let lang = prompt(MESSAGES.promptLanguage);

  while (invalidLanguage(lang)) {
    lang = prompt(`${MESSAGES.languageNotKnown}.\n   ${MESSAGES.promptLanguage}`);
  }

  return lang.toLowerCase();
}

function invalidLanguage(code) {
  code = code.toLowerCase();
  return !VALID_LANGUAGE_CODES.includes(code);
}

function greetUser() {
  console.clear();
  console.log(`\n${MESSAGES[langChoice].welcome}`);
}

function farewellUser() {
  console.log(`\n${MESSAGES[langChoice].farewell}\n`);
}


function getUserInput() {
  const number1 = promptForNumber(MESSAGES[langChoice].firstNum);
  const number2 = promptForNumber(MESSAGES[langChoice].secondNum);
  const operation = promptForOperation(MESSAGES[langChoice].operation);

  return [number1, number2, operation];
}

function promptForNumber(message) {
  let num = prompt(message);

  while (invalidNumber(num)) {
    num = prompt(MESSAGES[langChoice].askNumAgain);
  }

  return Number(num);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

function promptForOperation(message) {
  let operation = prompt(message);

  while (!VALID_OPERATORS.includes(operation)) {
    operation = prompt(MESSAGES[langChoice].askOperatorAgain);
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
  if (num2 === 0) {
    return MESSAGES[langChoice].canNotDivideZero;
  }
  return num1 / num2;
}

function printResult(result) {
  if (typeof result === 'number') {
    if (Number.isInteger(result)) {
      console.log(`\n${MESSAGES[langChoice].theResultIs}: ${result}.\n`);
    } else {
      console.log(`\n${MESSAGES[langChoice].theResultIs}: ${result.toFixed(5)}.\n`);
    }
  } else {
    console.log(`\n${MESSAGES[langChoice].somethingWentWrong}: ${result}.\n`);
  }
}


function shouldGoAgain(message) {
  let answer = prompt(message).toLowerCase();

  while (!validResponse(answer)) {
    answer = prompt(MESSAGES[langChoice].askKeepGoingAgain).toLowerCase();
  }

  return answer[0] !== 'n';
}

function validResponse(answer) {
  return MESSAGES[langChoice].yesNoResponses.includes(answer);
}

function prompt(message) {
  return readLine.question(`>> ${message}: `);
}

