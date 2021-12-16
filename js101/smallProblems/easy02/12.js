// In the previous exercise, you developed a function that converts
// non-negative numbers to strings. In this exercise, you're going 
// to extend that function by adding the ability to represent 
// negative numbers as well. Write a function that takes an integer
// and converts it to a string representation. You may not use any 
// of the standard conversion functions available in JavaScript, 
// such as `String()` and `Number.prototype.toString()`. You may
// however, use `integerToString()` from the previous exercise. 
// You might also want to check the `Math.sign()` function.

/*
  PROBLEM
    input is a signed integer
    output is a string representation

  ALGORITHM
    if num is 0, return '0'
    grab the sign of the number
    if -1, return a negative sign with call to `integerToString` from last exercise
    if 1, return a positive sign with call to `integerToString` from last exercise
*/

function signedIntegerToString(num) {
  if (num === 0) return '0';

  const sign = Math.sign(num);
  switch (sign) {
    case -1: return `-${integerToString(num)}`;
    case  1: return `+${integerToString(num)}`;
    default: return `something went wrong`;
  }
}


function integerToString(num) {
  if (Math.sign(num) === -1) num = Math.abs(num);
  if (num === 0) return '0';

  const digits = [];

  while (num > 0) {
    const digit = num % 10;
    digits.push(digit);
    num = (num - digit) / 10;
  }

  digits.reverse();
  const str = digits.join('');
  return str;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");