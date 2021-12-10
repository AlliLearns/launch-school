// Letter Swap
// Given a string of words separated by spaces, write
// a function that swaps the first and last letters of 
// every word. 

// You may assume that every word contains at least one 
// letter, and that the string will always contain at least
// one word. You may also assume that each string contains
// nothing but words and spaces, and that there are no leading
// trailing or repeating spaces. 

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

/*
  PROBLEM
    input is a string.
    output is a string.
    Swap the first and last letter of every word in a string.
    Every word will contain at least one letter.
    Every string will contain at least one word.
    There will be no trailing, leading or repeating spaces. 

  ALGORITHM
    split the input string into an array
    iterate over array
      for each word in the array, swap the first and last letters
    return the joined array

    swap letters:
      split the string into its characters
      swap the first and last elements
      join the characters and return the joined string
*/

function swap(str) {
  const words = str.split(' ');
  const swappedWords = words.map(word => swapLetters(word));
  return swappedWords.join(' ');
}

function swapLetters(word) {
  const chars = word.split('');
  [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
  return chars.join('');
}
