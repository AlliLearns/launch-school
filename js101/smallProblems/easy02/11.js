// In the previous two exercises, you developed
// functions that convert simple numeric strings
// to signed integers. In this exercise and the 
// next, you're going ot reverse those functions. 

// Write a function that converts a non-negative integer
// value to the string representation of that integer.
// You may not use any of the standard conversion functions
// available in JavaScript, such as `String()`, 
// `Number.prototype.toString()` or an expression such as 
// `'' + number.` Your function should do this the 
// old-fashioned way and construct the string by 
// analyzing and manipulating the number.

/*
  PROBLEM
    input is a string 
    output is a number
    convert the given string to a number
    do not use built-in explicit type conversion methods 

  ALGORITHM
    if input is 0 return '0'
    create an empty array `digits`

    start a loop for as long as num is positive
      grab the smallest digit place by modding by 10 and push onto `digits`
      remove the digit times 10 from num
    end loop

    return the reversed, joined array `digits`
*/

function integerToString(num) {
  if (num === 0) return '0';

  const digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.trunc(num / 10);
  }

  return digits.reverse().join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"