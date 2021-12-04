// Write a function that returns the next to last word 
// in the String passed to it as an argument.
// Words are sequences of non-blank characters. 
// You may assume that the input String will 
// always contain at least two words.

/*
  INPUT   a string of at least two words
  OUTPUT  a string of the second to last word
  RULES   input strings will have at least two words.
          input strings will be delimited with spaces.
  DATA    string primitives
  ALGORITHM
    - function penultimate(str)
      - create an array consisting of each word in the string
      - return the second to last word in the array
*/

function penultimate(str) {
  const words = str.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true