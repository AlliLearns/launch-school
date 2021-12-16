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
  PROBLEM
    input is a string of digits that have a plus or minus or no symbol prefix
    output is the integer number, with minus prefix resulting in a negative number
    you may use the function from the previous lesson.

  ALGORITHM
    calculate the number value of the given string
    if the prefix of the input is a minus sign, return the negative value
    otherwise return the value
*/

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default:  return stringToInteger(str);
  }
}

function stringToInteger(str) {
  const digits = str.split('').reverse();
  return digits.reduce((sum, digit, i) => sum + digit * 10 ** i, 0);
}