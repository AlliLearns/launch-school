// Create a simple tip calculator. 
// The program should prompt for a bill amount and 
// a tip rate. The program must compute the tip and 
// then log both the tip and the total amount of the 
// bill to the console. You can ignore input validation
// and assume that the user will enter numbers. 

/*
  INPUT   user input for bill amount and tip rate. 
  OUTPUT  print tip and total amount of the bill. 
  RULES   can ignore input validation.
          can assume user will enter numbers.
  DATA    primitive data
  ALGORITHM
    - declare constant `readLine` and initialize it to require('readline-sync')

    - function prompt(question) 
      - return a readLine.question(`=> ${question}`);
    
    - ask user for bill amount and store in `bill`
    - ask user for tip percentage and store in `tipPercentage`

    - calculate `tip` with bill * tipPercentage
    - calculate `totalBill` with bill + tip

    - print tip amount in USD format
    - print total bill in USD format
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