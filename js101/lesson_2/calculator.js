// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal. 

const readLine = require('../node_modules/readline-sync');

console.log('Welcome to Calculator!');

// Get and validate user input
const number1 = promptNumber("What's the first number?");
const number2 = promptNumber("What's the second number?");
const operation = promptOperation("What operation would you like to perform?" 
                                  + "\n Type '1' for Addition"
                                  + "\n Type '2' for Subtraction"
                                  + "\n Type '3' for Multiplication"
                                  + "\n Type '4' for Division");

function drawPrompt() {
  return "=>";
}

function promptNumber(message) {
  let num = readLine.question(`${drawPrompt()} ${message}\n`);

  while (invalidNumber(num)) {
    num = readLine.question(`${drawPrompt()} Sorry, that wasn't a number. Try again:\n`);
  }

  return Number(num);
}


function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}


function promptOperation(message) {
  let operation = readLine.question(`${drawPrompt()} ${message}\n`);

  while (!['1', '2', '3', '4'].includes(operation)) {
    operation = readLine.question(`${drawPrompt()} Sorry, that wasn't a valid operation. Try again:\n`);
  }

  return Number(operation);
}




// Do the operation
console.log(`The result is: ${performOperation(number1, number2, operation)}`);

function performOperation(num1, num2, operation) {
  switch (operation) {
    case 1: return num1 + num2;
    case 2: return num1 - num2;
    case 3: return num1 * num2;
    case 4: return num1 / num2;
    default: return "Invalid operation.";
  }
}


