// Create a simple tip calculator. 
// The program should prompt for a bill amount and 
// a tip rate. The program must compute the tip and 
// then log both the tip and the total amount of the 
// bill to the console. You can ignore input validation
// and assume that the user will enter numbers. 

const readLine = require('readline-sync');

function drawPrompt() {
  return `=>`;
}

function promptUser(message) {
  return readLine.question(`${drawPrompt()} ${message}? `);
}

function calculateTip(bill, tipRate) {
  return bill * (tipRate / 100);
}

function calculateTotal(bill, tip) {
  return Number(bill) + tip;
}

function printOutcome(tip, total) {
  const formattedTip = tip.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const formattedTotal = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });;

  console.log(`The tip is ${formattedTip}`);
  console.log(`The total is ${formattedTotal}`);
}

const bill = promptUser(`What is the bill`);
const rate = promptUser(`What is the tip percentage`);

const tip = calculateTip(bill, rate);
const total = calculateTotal(bill, tip);

printOutcome(tip, total);

