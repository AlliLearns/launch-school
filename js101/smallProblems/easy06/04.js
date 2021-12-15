// Get the Middle Character
// Write a function that takes a non-empty string 
// argument and returns the middle character(s) of
// the string. If the string has an odd `length`, 
// you should return exactly one character. If the 
// string has an even `length`, you should return 
// exactly two characters. 

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

/*
  PROBLEM
    input is a non-empty string
    output is one or two characters
    return the middle character(s). One if len odd and two if len even
    assume the input will always be a string

  ALGORITHM
    find the middle index of the string with Math.floor(str.length / 2);
    if len is odd, return chat at index
    if len is even, return char before and at index
*/

function centerOf(str) {
  const middle = Math.floor(str.length / 2);
  if (str.length % 2 === 1) return str[middle];
  return str[middle - 1] + str[middle] ;
}