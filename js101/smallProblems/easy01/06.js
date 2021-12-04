// Write a program that asks the user to enter 
// and integer greater than `0`, then asks 
// whether the user wants to determine the sum 
// or the product of all numbers between `1` and 
// the entered integer, inclusive. 

/*
  INPUT   user input
  OUTPUT  a number
  RULES   compute consecutive sum or consecutive multiplication of numbers 1 to n.
          assume we will not need input validation. 
          assume user will use the words `s` or `p` for input
  DATA    primitive data and arrays
  ALGORITHM
    - declare a constant `readLine` that requires readline-sync

    - ask user for an integer greater than 0 and store response in `num`
    - ask user for their operation and store response in `operation`

    - if operation is sum, 
      - declare `result` and initialize it to evaluation of doAddition(num)
      - print result as sum.
    - if operator is mult, 
      - declare `result` and initialize it to evaluation of doMultiplication(num)
      - print result as multiplication

    - function prompt(question) 
      - return readLine.question(`=> ${question}: `);

    function doAddition(num) 
      - declare variable `sum` and init it to 0
      - loop up to the value of `num` and add the current iterator number to `sum`, incrementing the iterator by 1.
      - return `sum`
    
    function doMultiplication(num)
      - declare variable `mult` and init it to 1
      - loop up to the value of `num` and multiply the current iterator number with the current value of `mult`, incrementing the iterator by 1
      - return the value of `mult`    
*/

const readLine = require('readline-sync');

const num = prompt("Please enter an integer greater than 0");
const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product');

if (operation === 's') {
  const sum = doAddition(num);
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else {
  const product = doMultiplication(num);
  console.log(`The product of the integers between 1 and ${num} is ${product}.`);
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