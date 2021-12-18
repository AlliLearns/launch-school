// Write a function that takes one argument, 
// a positive integer, and returns a string of 
// alternating `'1'`s and `'0'`s, always 
// starting with a `'1'`. The `length` of the 
// string should match the given integer. 

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

/*
  PROBLEM
    input is a positive integer
    output is a string of alternating 1s and 0s
    start the output with a 1
    output string is the length specified in the given input

  ALGORITHM
    pad an empty string with '10' up to the length of the input
*/

function stringy(num) {
  let result = '';
  return result.padStart(num, '10');
}