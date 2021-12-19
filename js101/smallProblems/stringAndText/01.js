// Uppercase Check
// Write a function that takes a string argument
// and returns `true` if all of the alphabetic 
// characters inside the string are uppercase;
// `false` otherwise. Ignore characters that are 
// not alphabetic.

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/*
  PROBLEM
    input is a string
    output is a boolean
    output indicates whether all the chars in the string are uppercase 
    returns true if so and false if not
    non-alphabetic characters can be ignored
    empty strings count as true

  ALGORITHM
    if the input is an empty string, return true

    strip all non-alphabetic characters from the input string
    iterate over the string
      if a character is lowercase, return false
      check if a character is lowercase by (char.toLowerCase() === char)
    end iteration
    return true
*/

function isUppercase(str) {
  if (str.length === 0) return true;

  str = str.replace(/[^a-z]/gi, '');
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.toLowerCase() === char) return false;
  }

  return true;
}