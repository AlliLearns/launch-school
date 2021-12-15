// Reverse Number
// Write a function that takes a positive integer as 
// an argument and returns that number with its 
// digits reversed. 

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1

/*
  PROBLEM
    input is a positive integer
    output is the positive number with its digits reversed

  ALGORITHM
    make new empty array `digits`
    while num is greater than 0,
      grab digit with num % 10
      push digit
      modify num with num - digit / 10
    join digits 
    return number-casted `digits`
*/

function reverseNumber(num) {
  const digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.trunc(num / 10);
  }

  return Number(digits.join(''));
}