// Letter counter (Part 02)
// Modify the `wordSizes` function from the previous
// exercise to exclude non-letters when determining 
// word size. For instance, the word size of `it's`
// is `3` and not `4`.

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}

/*
  PROBLEM
    input is a string 
    output is an object that consists of the number of n-length words.
    symbols are not part of a word's length

  DATA
  ALGORITHM
    return an empty object if the string is empty or contains only whitespace
    split the string on a space
    remove all non-letter characters from each word in the array and get word lengths
    iterate over the array
    for every word that has n length, add it to the object or increment the key's value. 
*/

function wordSizes(str) {
  if (str.trim().length === 0) return {};

  const wordLengths = str.split(' ').map(word => stripSymbols(word).length);

  const sizes = {};
  wordLengths.forEach(wordLen => sizes[wordLen] = sizes[wordLen] + 1 || 1);
  return sizes;
}

function stripSymbols(str) {
  return str.replace(/[^a-z]/gi, '');
}