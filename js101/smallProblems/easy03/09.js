// Given a string that consists of some words and 
// and assortment of non-alphabetic characters, write 
// a function that returns that string with all the 
// non-alphabetic characters replaced by spaces.
// IF one or more non-alphabetic characters occur
// in a row, you should only have one space in 
// the result.

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

/*
  PROBLEM
    input is a string 
    output is a string
    the output will be the input string with all non-alphabetic characters replaced with a space
    assume string input

  ALGORITHM
    regex of non-alphabetical characters /[^a-z]/gi
    regex of one or more spaces /\s+/g
    replace all non-alphabetical chars of input string with spaces
    collapse spaces 
    return resulting string
*/

function cleanUp(str) {
  let result = str.replace(/[^a-z]/gi, ' ');
  result = result.replace(/\s+/g, ' ');
  return result;
}

