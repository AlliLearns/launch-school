// Write a program that prompts the user for 
// two positive integers, and then prints 
// the results of the following operations 
// on those two numbers: addition, subtraction,
// product, quotient, remainder and power. 
// Don't worry about validating the input. 

/*
  PROBLEM
    input is user input, prompting for two positive integers
    output is printing the result of a number of operations on those numbers

  ALGORITHM
    ask user for the first number and store in `num1`
    ask user for the second number and store in `num2`
    print the result of the following operations:    
    - function doAddition(num1, num2) return num1 + num 2
    - function doSubtraction(num1, num2) return num1 - num2
    - function doMultiplication(num1, num2) return num1 * num2
    - function doDivision(num1, num2) return num1 / num2
    - function doRemainder(num1, num2) return num1 % num2
    - function doPower(num1, num2) return Math.pow(num1, num2)
*/

const readLine = require('readline-sync');

function drawPrompt() {
  return `=>`;
}

function promptUser(message) {
  return readLine.question(`${drawPrompt()} ${message}: `);
}

const addition = (num1, num2) => Number(num1) + Number(num2);
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => Math.floor(num1 / num2);
const remainder = (num1, num2) => num1 % num2;
const power = (num1, num2) => num1 ** num2;

function formatOperationResult(num1, num2, operator) {
  switch (operator) {
    case "+": return `${drawPrompt()} ${num1} ${operator} ${num2} = ${addition(num1, num2)}`;
    case "-": return `${drawPrompt()} ${num1} ${operator} ${num2} = ${subtraction(num1, num2)}`;
    case "*": return `${drawPrompt()} ${num1} ${operator} ${num2} = ${multiplication(num1, num2)}`;
    case "/": return `${drawPrompt()} ${num1} ${operator} ${num2} = ${division(num1, num2)}`;
    case "%": return `${drawPrompt()} ${num1} ${operator} ${num2} = ${remainder(num1, num2)}`;
    case "**": return `${drawPrompt()} ${num1} ${operator} ${num2} = ${power(num1, num2)}`;
    default: return `Invalid operation`;
  }
}

const num1 = promptUser("Enter the first number");
const num2 = promptUser("Enter the second number");

console.log(formatOperationResult(num1, num2, "+"));
console.log(formatOperationResult(num1, num2, "-"));
console.log(formatOperationResult(num1, num2, "*"));
console.log(formatOperationResult(num1, num2, "/"));
console.log(formatOperationResult(num1, num2, "%"));
console.log(formatOperationResult(num1, num2, "**"));