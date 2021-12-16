// Write a function that returns the next to last word 
// in the String passed to it as an argument.
// Words are sequences of non-blank characters. 
// You may assume that the input String will 
// always contain at least two words.

/*
  PROBLEM
    input is a string with at least two words
    output is a string representing the second to last word of the input
    words are sequences of non-blank characters
    assume words are separated by whitespace

  ALGORITHM
    split the input string into an array of its words
    return the second to last index of the array
*/

function penultimate(str) {
  const words = str.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true