// Now I know my ABCs
// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that 
// do not use both letters from any given block. You can also only use each block 
// once. Write a function that takes a word string as an argument and returns 
// `true` if the word can be spelled using the set of blocks, `false` otherwise. 
// You can consider the letters to be case-insensitive when you apply the rules. 

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

/*
  PROBLEM
    input is a word
    output is a boolean
    output indicates whether the input can be spelled with the given blocks
    a letter from a block can only be used once
    a block can only be used once
    assume case does not matter

  ALGORITHM
    create an array of blocks, each block its own 2-element array
    lowercase the input string
    iterate over the input string
      if the current character can't be found in the array, return false
      else remove the array element that contains this character from the array
    end iteration
    return true
*/

function isBlockWord(str) {
  const blocks = [
    [...'bo'],
    [...'xk'],
    [...'dq'],
    [...'cp'],
    [...'na'],
    [...'gt'],
    [...'re'],
    [...'fs'],
    [...'jw'],
    [...'hu'],
    [...'vi'],
    [...'ly'],
    [...'zm'],
  ];

  

  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!blocks.flat().includes(char)) return false;
    const index = findIndex(blocks, char);
    blocks.splice(index, 1);
  }

  return true
}

function findIndex(arr, char) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(char)) return i;
  }
}