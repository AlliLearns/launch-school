// Searching 101
// Write a program that solicits six numbers from the user and
// logs a message that describes whether the sixth number 
// appears among the first five numbers. 

/*
  PROBLEM
    get six integer numbers from the user.
    don't worry about user input validation.
    check to see whether the 6th number matches any of the other five numbers.
    log a message that indicates the result of this check.

  ALGORITHM
    get six integer numbers from the user and store in an array.
    check to see whether the 6th number matches any of the previous five numbers
    log a message that indicates the result of this check. 
*/

const readLine = require('readline-sync');


const nums = getSixNumbers();
const result = generateResult(nums);
console.log(result);

function getSixNumbers() {
  const num1 = prompt("Enter the 1st number");
  const num2 = prompt("Enter the 2nd number");
  const num3 = prompt("Enter the 3rd number");
  const num4 = prompt("Enter the 4th number");
  const num5 = prompt("Enter the 5th number");
  const num6 = prompt("Enter the last number");

  return [num1, num2, num3, num4, num5, num6];
}

function generateResult(numArr) {
  const finalNum = numArr.pop();
  const includes = numArr.includes(finalNum);

  if (includes) return `The number ${finalNum} appears in ${numArr}.`
  return `The number ${finalNum} does not appear in ${numArr}.`
}

function prompt(message) {
  return readLine.question(`=> ${message}: `);
}