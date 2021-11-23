const readLine = require('readline-sync');
const MSG = require('./calculator_messages.json');

const VALID_OPERATORS = ['1', '2', '3', '4', '+', '-', '*', '/'];


greetUser();
runCalculator();
farewellUser();

// runUnitTests();

function greetUser() {
  // TODO
}

function farewellUser() {
  // TODO
}

function runCalculator() {
  do {
    console.clear();
    const [num1, num2, operator] = getCalculationData();
    const result = doCalculation(num1, num2, operator);
    console.log(formatResult(result));
  } while (shouldGoAgain());
}

function getCalculationData() {
  const num1      = getUserInput(MSG.firstNum, MSG.askNumAgain, isANumber);
  const num2      = getUserInput(MSG.secondNum, MSG.askNumAgain, isANumber);
  const operation = getUserInput(MSG.operator, MSG.askOperatorAgain, validOperator);

  return [num1, num2, operation];
}

function getUserInput(inputMessage, invalidInputMessage, validInput) {
  let inputStr = promptUser(inputMessage).toLowerCase();

  if (!validInput(inputStr)) {
    informUser(invalidInputMessage);
    return getUserInput(inputMessage, invalidInputMessage, validInput);
  }

  return input;
}

function doCalculation(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  operator = Number(formatOperation(operator));

  switch (operator) {
    case 1: return num1 + num2;
    case 2: return num1 - num2;
    case 3: return num1 * num2;
    case 4: return handleDivideByZero(num1, num2);
    default: return MSG.invalidOperation;
  }
}

function shouldGoAgain() {
  const answer = getUserInput(MSG.askGoAgain, MSG.askKeepGoingAgain, validResponse);
  return answer[0] === 'y'
}

function isANumber(inputStr) {
  return !inputStr.trim() === '' && !Number.isNaN(Number(inputStr));
}

function validOperator(operatorStr) {
  return VALID_OPERATORS.includes(operatorStr);
}

function formatOperation(operator) {
  switch (operator) {
    case '+': return '1';
    case '-': return '2';
    case '*': return '3';
    case '/': return '4';
    default:  return operator;
  }
}

function handleDivideByZero(num1, num2) {
  if (num2 === 0 || num2 === -0) return MSG.canNotDivideZero;
  return num1 / num2;
}

function formatResult(result) {
  const resultIs = MSG.theResultIs;
  const errorMsg = MSG.somethingWentWrong;

  if (typeof result === 'number') {
    if (Number.isInteger(result))  return `\n${resultIs}: ${result}.\n`;
    if (!Number.isInteger(result)) return `\n${resultIs}: ${result.toFixed(3)}.\n`;
  }

  return `${errorMsg}: ${result}`;
}

function validResponse(answer) {
  return MSG.yesNoResponses.includes(answer);
}

function promptUser(message) {
  return readLine.question(`${drawPrompt()} ${message}: `);
}

function informUser(message) {
  console.log(`${drawPrompt()} ${message}`);
}

function drawPrompt() {
  return `=>`;
}


function runUnitTests() {
  const testResults = [];

  if (drawPrompt() === `=>`)                  testResults.push(true);
  if (informUser(`message`) === `=> message`) testResults.push(true);


  let isANumberTest = false;
  if (isANumber('') === false)    isANumberTest = true;
  if (isANumber('   ') === false) isANumberTest = true;
  if (isANumber('abc') === false) isANumberTest = true;
  if (isANumber('3a') === false)  isANumberTest = true;
  if (isANumber('a3') === false)  isANumberTest = true;
  if (isANumber('3') === true)         isANumberTest = true;
  if (isANumber('3.5') === true)       isANumberTest = true;
  if (isANumber('-3') === true)        isANumberTest = true;
  if (isANumber('-3.5') === true)      isANumberTest = true;
  if (isANumber('Infinity') === true)  isANumberTest = true;
  if (isANumber('-Infinity') === true) isANumberTest = true;
  if (isANumber('NaN') === true)       isANumberTest = true;
  testResults.push(isANumberTest);


  let isAnOperatorTest = false
  if (validOperator('1') === true) isAnOperatorTest = true;
  if (validOperator('2') === true) isAnOperatorTest = true;
  if (validOperator('3') === true) isAnOperatorTest = true;
  if (validOperator('4') === true) isAnOperatorTest = true;
  if (validOperator('+') === true) isAnOperatorTest = true;
  if (validOperator('-') === true) isAnOperatorTest = true;
  if (validOperator('*') === true) isAnOperatorTest = true;
  if (validOperator('/') === true) isAnOperatorTest = true;
  testResults.push(isAnOperatorTest);


  let validResponseTest = false;
  if (validResponse('yes') === true)  validResponseTest = true;
  if (validResponse('Yes') === true)  validResponseTest = true;
  if (validResponse('YeS') === true)  validResponseTest = true;
  if (validResponse('y') === true)    validResponseTest = true;
  if (validResponse('Y') === true)    validResponseTest = true;
  if (validResponse('yea') === true)  validResponseTest = true;
  if (validResponse('yeah') === true) validResponseTest = true;
  if (validResponse('yep') === true)  validResponseTest = true;
  if (validResponse('no') === true)   validResponseTest = true;
  if (validResponse('NO') === true)   validResponseTest = true;
  if (validResponse('n') === true)    validResponseTest = true;
  if (validResponse('N') === true)    validResponseTest = true;
  if (validResponse('nah') === true)  validResponseTest = true;
  if (validResponse('nope') === true) validResponseTest = true;
  testResults.push(validResponseTest);

  let formatOperatorTest = false;
  if (formatOperation('+') === '1')     formatOperatorTest = true;
  if (formatOperation('-') === '2')     formatOperatorTest = true;
  if (formatOperation('*') === '3')     formatOperatorTest = true;
  if (formatOperation('/') === '4')     formatOperatorTest = true;
  if (formatOperation('4') === '4')     formatOperatorTest = true;
  if (formatOperation(4) === 4)         formatOperatorTest = true;
  if (formatOperation('abc') === 'abc') formatOperatorTest = true;
  testResults.push(formatOperatorTest);


  let handleDivideByZeroTest = false;
  if (handleDivideByZero(0, 0) ===  MSG.canNotDivideZero) handleDivideByZeroTest = true;
  if (handleDivideByZero(3, 0) ===  MSG.canNotDivideZero) handleDivideByZeroTest = true;
  if (handleDivideByZero(3, -0) === MSG.canNotDivideZero) handleDivideByZeroTest = true;
  if (handleDivideByZero(10, 5) === 2)                    handleDivideByZeroTest = true;
  testResults.push(handleDivideByZeroTest);

  const allTestsPass = testResults.every(val => val === true);
  if (allTestsPass) console.log('All tests passed!');
}