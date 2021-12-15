// Double Char (Part 01)
// Write a function that takes a string, doubles
// ever character in the string and returns the 
// result as a new string. 

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

/*
  PROBLEM
    input is a string
    output is a string 
    double each character in a given string

  ALGORITHM
    create new empty array
    iterate over input string
    push the current character onto the new array twice
    join and return the array
*/

function repeater(str) {
  const doubleChars = [];

  for (let i = 0; i < str.length; i++) {
    doubleChars.push(str[i], str[i]);
  }

  return doubleChars.join('');
}