// PROBLEM
// Write a function that takes a string argument
// and returns a new string that contains the 
// value of the original string with all consecutive 
// duplicate characters collapsed into a single char. 

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

/*
  PROBLEM
    input is a string 
    output is a string of the input stripped of consecutive duplicate characters
    strip consecutive duplicate characters
    assume string input

  ALGORITHM
    if input string length is less than or equal to 1, return the input string
    identify repeated characters with regex /(.)\1*]/ and replace with the char
*/

function crunch(str) {
  return str.replace(/(.)\1*/g, '$1');
}