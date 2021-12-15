// Reverse It (Part 01)
// Write a function that takes a string argument and 
// returns a new string containing the words from the 
// string argument in reverse order. 

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

/*
  PROBLEM
    input is a string
    output is the words of the string in reverse order
    assume string input

  ALGORITHM
    split the input string on words, return the reversed joined on spaces string
*/

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}