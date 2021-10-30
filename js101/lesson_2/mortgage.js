// Build a mortgage calculator
// It'll take information from the user and print the expected
// monthly payment in dollar format [ $123.45 ].
// The three pieces of information it'll take from the user are:
//    - The loan amount
//    - The Annual Percentage Rate (APR)
//    - The loan duration (in years)

// You can use the formula [ m = p * (j / (1 - Math.pow((1 + j), (-n)))); ]
// Where:
//    - m = monthly payment
//    - p = loan amount
//    - j = monthly interest rate
//    - n = loan duration in months
// You'll have to calculate j from APR and n from the loan duration.


const readLine = require('../../node_modules/readline-sync');


// Main loop logic
let keepGoing = false;
do {
  const [loan, apr, years] = getUserInput();

  console.log(getMonthlyPayment(loan, apr, years));

  keepGoing = askUser("Do you want do another calculation?");

} while (keepGoing);

// Attain and validate user input
function getUserInput() {
  const loanTotal = getLoanTotal("Provide your total loan amount");
  const annualPercentageRate = getAPR("Provide your APR");
  const years = getLoanDuration("Provide your loan duration in years");

  return [loanTotal, annualPercentageRate, years];
}

function getLoanTotal(message) {
  let loan = readLine.question(`${prompt()} ${message}:\n`);
  loan = stripSymbol(loan, ',');

  while (invalidNumber(loan)) {
    loan = readLine.question(`${prompt()} Sorry, we need a number. Try again.\n`);
    loan = stripSymbol(loan, ',');
  }

  return Number(loan);
}

function getAPR(message) {
  let apr = readLine.question(`${prompt()} ${message}:\n`);
  apr = stripSymbol(apr, '%');

  while (invalidAPR(apr)) {
    apr = readLine.question(`${prompt()} Sorry, we need a number between 0 and 100 or 0 and 1. Try again.\n`);
    apr = stripSymbol(apr, '%');
  }

  return Number(apr);
}

function getLoanDuration(message) {
  let duration = readLine.question(`${prompt()} ${message}:\n`);

  while (invalidDuration(duration)) {
    duration = readLine.question(`${prompt()} Sorry, we need at least one month. Try again.\n`);
  }

  return Number(duration);
}

function invalidAPR(apr) {
  if (invalidNumber(apr)) return true;
  if (apr > 100 || (apr / 100) > 1) return true;
  return false;
}

function invalidDuration(dur) {
  if (invalidNumber(dur)) return true;
  if (dur < (1 / 12)) return true;
  return false;
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

function stripSymbol(str, symbol) {
  const sym = new RegExp(symbol, "g");
  return str.replace(sym, '');
}

// Calculate and print monthly payment
function getMonthlyPayment(loanTotal, apr, loanDuration) {
  const monthlyPayment = calcMonthlyPayment(loanTotal, apr, loanDuration);
  return formatMoneyValue(monthlyPayment);
}

function calcMonthlyPayment(loanTotal, apr, durationYears) {
  const monthlyInterestRate = calcMonthlyInterestRate(apr);

  const durationMonths = durationYears * 12;

  const dividend = (1 - Math.pow((1 + monthlyInterestRate), (-durationMonths)));
  return loanTotal * (monthlyInterestRate / dividend);
}

function calcMonthlyInterestRate(apr) {
  // Input validation already restricted the ranges and format.
  // Now we just need to account for whether the
  // given APR was in percentages or decimal equivalent.
  // Expects 0 to 1

  if (apr <= 1 ) {
    return apr / 12;
  } else {
    return (apr / 100) / 12;
  }
}

function formatMoneyValue(num) {
  return `$${num.toFixed(2)}`;
}

// Ask user if they want to keep going
function askUser(message) {
  let answer = readLine.question(`${prompt()} ${message}\n`).toLowerCase();

  while (!yesOrNo(answer)) {
    answer = readLine.question(`${prompt()} Type 'y' or 'n'.\n`).toLowerCase();
  }

  return answer[0] !== 'n'; 
}

function yesOrNo(answer) {
  const acceptedYes = ['yes', 'y', 'yea', 'yep'];
  const acceptedNo = ['no', 'n', 'nah', 'nope'];
  return acceptedYes.includes(answer) || acceptedNo.includes(answer);
}

function prompt() {
  return '=>';
}
