// The Fibonacci series is a series of numbers
// `(1, 1, 2, 3, 5, 8, 13, 21, ...)` such that 
// the first two numbers are 1 by definition 
// and each subsequent number is the sum of 
// the two previous numbers. Fibonacci numbers
// often appear in mathematics and nature. 

// Computationally, the Fibonacci series is 
// a simple series, but the results grow at an
// incredibly rapid rate. For example, the 100th
// Fibonacci number is (large). 

// Write a function that calculates and returns 
// the index of the first Fibonacci number that has 
// the number of digits specified by the argument. 
// You may assume that the argument is always an 
// integer greater than or equal to `2`.

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

/*
  INPUT   number
  OUTPUT  number
  RULES   index of the first Fibonacci number that has n digits. 
  DATA    primitive values...
  ALGORITHM 
    - function findFibonacciIndexByLength(num) 
      - declare `series` and initialize it to array [1, 1]

      - start a loop of unknown length
        - push 
        - break loop on (countDigits(series[index])) === num)

      - return BigInt(series.length)

    - function countDigits(num) {

    }
*/

function findFibonacciIndexByLength(num) {
  const series = [1, 1];

  while (true) {
    const length = series.length;
    series.push(BigInt(series[length - 1]) + BigInt(series[length - 2]));
    if (countDigits(series[length]) === num) break;
  }

  return BigInt(series.length);
}


function countDigits(num) {
  let count = 0;

  while (num > 0) {
    count += 1;
    
    const digit = num % 10n;
    num = (num - digit) / 10n;
  }

  return BigInt(count);
}