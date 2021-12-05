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
  INPUT   a number
  OUTPUT  a string representation of that number
  RULES   construct a string from a number
          don't use shortcuts
  DATA    arrays
  ALGORITHM
    - function integerToString(num)
      - declare array `digits` and init to empty array

      - iterate over `num`
        - declare a constant `digit` and assign it to `num % 10`
        - push `digit` onto `digits`
        - update `num` to `(num - digit) / 10`

      - reverse `digits`
      - join `digits` to a string `str`
      - return `str
*/

function integerToString(num) {
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

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"