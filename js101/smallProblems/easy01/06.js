// Write a program that asks the user to enter 
// and integer greater than `0`, then asks 
// whether the user wants to determine the sum 
// or the product of all numbers between `1` and 
// the entered integer, inclusive. 

/*
  PROBLEM
    input is user input for positive integer value and whether they want to do addition or multiplication
    output is the formatted result of their choice printed to console
    don't worry about input validation
    if they want addition, add all numbers between [0 and n] and log it
    if they want multiplication, multiply all numbers from [1 to n] and log it

  ALGORITHM
    ask user for an integer greater than 0 and store it in `num`
    ask user for 's' or 'p' for what they want to compute and store in `operation`

    if they want addition, do addition and log to console
    if they want multiplication, get product and log to console
    if invalid input, let them know that their operation was invalid. 
*/

const readLine = require('readline-sync');

const num = prompt("Please enter an integer greater than 0");
const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product');

if (operation === 's') {
  const sum = doAddition(num);
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else if (operation === 'p') {
  const product = doMultiplication(num);
  console.log(`The product of the integers between 1 and ${num} is ${product}.`);
} else {
  console.log("You chose an invalid operation.");
}


function prompt(question) {
  return readLine.question(`=> ${question}: `);
}

function doAddition(num) {
  num = Number(num);
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;
}

function doMultiplication(num) {
  num = Number(num);
  let mult = 1;

  for (let i = 1; i <= num; i++) {
    mult *= i;
  }

  return mult;
}