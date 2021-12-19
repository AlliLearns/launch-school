// How long are you?
// Write a function that takes a string as an argument
// and returns an array that contains every word from 
// the string, with each word followed by a space and 
// the word's `length`. If the argument is an empty 
// string or if no argument is passed, the function 
// should return an empty array. You may assume that 
// every pair of words in the string will be separated
// by a single space. 

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

/*
  PROBLEM
    input is a string
    output is an array of strings
    output array string elements are each word spaced from the word's length
    return an empty array for an empty string or no input
    words in the input string are separated by a single space 

  ALGORITHM
    default input to an empty string if missing
    if the length of the input string is 0 return empty array
    break the input string by their spaces into `words` array
    iterate over array
      grab the length of the current word
      reassign the value of the array to a string of its current value and the length
    end iteration
    return `words`
*/

function wordLengths(str = '') {
  if (str.length === 0) return [];

  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const len = words[i].length;
    words[i] = `${words[i]} ${len}`;
  }

  return words;
}