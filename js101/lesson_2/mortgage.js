const readLine = require('../../node_modules/readline-sync');
const MESSAGES = require('./mortgage_messages.json');

const MONTHS_IN_YEAR = 12;
const MAX_PERCENT = 100;
const MAX_DECIMAL_PERCENT = 1;

greetUser();
runCalculator();
farewellUser();

function greetUser() {
  printHeader(MESSAGES.welcome);
  waitForUser(MESSAGES.getStartedPrompt);
}

function farewellUser() {
  printHeader(MESSAGES.farewell);
  waitForUser(MESSAGES.exitPrompt);
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

function runCalculator() {
  let keepGoing = false;
  do {
    const [loan, apr, years] = getUserInput();

    const monthlyPayment = calcMonthlyPayment(loan, apr, years);
    console.log(formatResult(monthlyPayment));

    console.log(`\n\n`);

    keepGoing = shouldGoAgain(MESSAGES.askAnotherCalculation);
    console.clear();

  } while (keepGoing);
}


function getUserInput() {
  const loan = validateInput(
    MESSAGES.promptForLoan,
    MESSAGES.promptLoanAgain,
    invalidLoan);

  const apr = validateInput(
    MESSAGES.promptForAPR,
    MESSAGES.promptAPRAgain,
    invalidAPR);

  const years = validateInput(
    MESSAGES.promptForDuration,
    MESSAGES.promptDurationAgain,
    invalidDuration);

  return [loan, apr, years];
}

function validateInput(inputAskStr, askAgainStr, validationCallback) {
  let value = prompt(`${inputAskStr}`);
  value = stripInput(value);

  while (validationCallback(value)) {
    value = prompt(`${askAgainStr}`);
    value = stripInput(value);
  }

  return Number(value);
}

function invalidLoan(loan) {
  if (invalidNumber(loan)) return true;
  if (Number(loan) <= 0) return true;
  return false;
}

function invalidAPR(apr) {
  if (invalidNumber(apr)) return true;
  if (apr > MAX_PERCENT) return true;
  if ((apr / MAX_PERCENT) > MAX_DECIMAL_PERCENT) return true;

  return false;
}

function invalidDuration(dur) {
  if (invalidNumber(dur)) return true;
  if (Number(dur) < (1 / MONTHS_IN_YEAR)) return true;
  return false;
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

function stripInput(str) {
  const invalidSymbols = [',', '$', '%', 'yr', 'years', 'year'];
  str = str.trim();

  for (let index = 0; index < invalidSymbols.length; index++) {
    str = stripSymbol(str, invalidSymbols[index]);
  }

  return str;
}

function stripSymbol(str, symbol) {
  return str.replaceAll(symbol, '');
}


function calcMonthlyPayment(loanTotal, apr, durationYears) {
  const monthlyInterestRate = calcMonthlyInterestRate(apr);

  const durationMonths = durationYears * MONTHS_IN_YEAR;

  const dividend = (1 - Math.pow((1 + monthlyInterestRate), (-durationMonths)));
  return loanTotal * (monthlyInterestRate / dividend);
}

function calcMonthlyInterestRate(apr) {
  // Input validation already restricted the ranges and format.
  // Now we just need to account for whether the
  // given APR was in percentages or decimal equivalent.
  // Expects 0 to 1

  if (apr <= MAX_DECIMAL_PERCENT ) {
    return apr / MONTHS_IN_YEAR;
  } else {
    return (apr / MAX_PERCENT) / MONTHS_IN_YEAR;
  }
}

function formatResult(monthlyPayment) {
  monthlyPayment = monthlyPayment.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  return `\nYou'll owe ${monthlyPayment} per month.`;
}


function shouldGoAgain(message) {
  let answer = prompt(`${message}`).toLowerCase();

  while (!validateContinue(answer)) {
    answer = prompt(`Type 'y' or 'n'`).toLowerCase();
  }

  return answer[0] !== 'n';
}

function validateContinue(answer) {
  const acceptedAnswers = ['yes', 'y', 'yea', 'yep', 'yeah', 'no', 'n', 'nah', 'nope'];
  return acceptedAnswers.includes(answer);
}


function prompt(message) {
  return readLine.question(`${drawPrompt()} ${message}: `);
}

function drawPrompt() {
  return '=>';
}
