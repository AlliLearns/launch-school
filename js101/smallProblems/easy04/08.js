// Letter Counter (Part 01)
// Write a function that takes a string consisting of 
// zero or more space separated words and returns an
// object that shows the number of words of different
// sizes. 

/*
  PROBLEM
    input is a string with zero or more space separated words
    output is an object that shows the number of words of different sizes
    assume string input
    assume that symbols are part of the word's length
    assume that punctuation are part of the word's length
    assume that whitespace is not part of the word's length

  DATA
    strings and objects

  ALGORITHM
    return an empty object if the input string is empty or only whitespace.
    split the input string on a space. 
    create an array made from each word's length
    iterate over the new array of split string lengths
    for every word that has n length, init to 1 or increment the key's value
*/

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes(str) {
  if (str.trim().length === 0) return {};

  const lengths = str.split(' ').map(word => word.length);
  const sizes = {};

  lengths.forEach(wordLen => sizes[wordLen] = sizes[wordLen] + 1 || 1);

  return sizes;
}