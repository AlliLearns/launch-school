// In the previous exercise, you developed a function
// that converts simple numeric strings to integers. 
// In this exercise, you're going to extend that function
// to work with signed numbers. 

// Write a function that takes a string of digits and 
// returns the appropriate number as an integer. The 
// string may have a leading `+` or `-` sign; if the 
// first character is a `+`, your function should return
// a positive number; if it's a `-`, your function should 
// return a negative number. If there is no sign, return a 
// positive number.

// You may assume the string will always contain a valid number.
// You may not use any of the standard conversion methods 
// available in JavaScript, such as `parseInt()` and `Number()`.
// You may, however, use the `stringToInteger()` method from
// the previous lesson. 

/*
  INPUT   a string
  OUTPUT  a number
  RULES   convert the string to a number. 
          Pos if first char is `+` or a digit.
          Neg if first char is `-`.
          Assume no other non-numeric values in the string.
  DATA    arrays
  ALGORITHM
    - function stringToSignedInteger(str)
      - declare `digits` and split `str` into array of it's characters.
      - declare `num` and init to `0`.

      - Check whether first character is a symbol of `-` or `+` or digit
      - If it's a `+` or a digit, call `stringToPosInteger(str) and assign to `num`
      - If it's a `-`, call `stringToNegInteger(str) and assign to `num`

      - return `num`

    - function stringToPosInteger(str) 
      - same function as `stringToInteger(str)` in last exercise

    - function stringToNegInteger(str)
      - declare `num` and init it to `0`
      - split `str` to an array, and we're gonna store that in `arr`
      - remove the first element from `arr` and discard it. 

      - iterate over `arr`
        - for each element in `arr`, subtract the 10s place of the current element and reassign to `num`

      - return `num`
*/

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '+': return stringToInteger(str.slice(1, str.length));
    case '-': return -stringToInteger(str.slice(1, str.length));
    default:  return stringToInteger(str);
  }
}

function stringToInteger(str) {
  const digits = str.split('');
  let num = 0;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== '+') {
      num += digits[i] * (10 ** (digits.length - i - 1));
    }
  }

  return num;
}