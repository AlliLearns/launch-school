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
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

/*
  PROBLEM
    input is a specified number of sigfigs
    output is a BigInt 
    output represents the index of the first Fibonacci number of the input length
    the input is always an integer greater than or equal to 2
    assume input will always be a BigInt

  ALGORITHM
    create a three-value array [1, 1, 2] stored in `last`
    create `digitCount` and init to `1`

    begin an unknown length iteration
      rotate the array `last` with the last value being the next value in the series
      count the digits of the last value in the series
      if the digit count is larger than the current digit count, increment `digitCount`
      if `digitCount` equals the input number, break
    end iteration

    return `digitCount`
*/

function findFibonacciIndexByLength(num) {
  const last = [1, 1, 2];
  let callCount = 3n;

  while (true) {
    callCount = updateFibonacci(last, callCount);
    const digitCount = countDigits(last[last.length - 1]);
    if (digitCount === num) return callCount;
  }
}

function updateFibonacci(arr, callCount) {
  arr.shift();
  arr.push(arr[0] + arr[1]);
  return callCount += 1n;
}


function countDigits(num) {
  let count = 0;

  while (num > 0) {
    count += 1;
    
    const digit = num % 10;
    num = (num - digit) / 10;
  }

  return BigInt(count);
}