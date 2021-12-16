// Create a simple tip calculator. 
// The program should prompt for a bill amount and 
// a tip rate. The program must compute the tip and 
// then log both the tip and the total amount of the 
// bill to the console. You can ignore input validation
// and assume that the user will enter numbers. 

/*
  PROBLEM
    input is user input for bill amount and tip rate
    output is logging total bill and tip to console

  ALGORITHM
    ask user to enter bill amount and store in `bill`
    ask user to enter tip rate and store in `tipPercentage`
    
    calculate `tip` with `bill * (tipPercentage / 100))
    calculate `totalBill` with `bill + tip`

    print `The tip is \$${tip}` to console
    print `The total is \$${totalBill}` to console.
*/


const readLine = require('readline-sync');

function prompt(question) {
  return readLine.question(`=> ${question}: `);
}

const bill = Number(prompt("What is the bill"));
const tipPercentage = Number(prompt("What is the tip percentage"));

const tip = bill * ((tipPercentage / 100)).toFixed(2);
const totalBill = (bill + tip).toFixed(2);

console.log(`The tip is \$${tip}`);
console.log(`The total is \$${totalBill}`);