// Delete Vowels
// Write a function that takes an array of strings
// and returns an array of the same string values, 
// but with all vowels removed.

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/*
  PROBLEM
    input is an array of strings
    output is an array with the same string values, but with all vowels removed

  ALGORITHM
    create regex /[aeiou]/gi
    create copy of input array
    iterate over copy of input array
      replace each string with the current string but with vowels removed
    end iteration
    return copy of input array
*/

function removeVowels(arr) {
  const vowelMatch = /[aeiou]/gi;
  const inputCopy = arr.slice();

  for (let i = 0; i < inputCopy.length; i++) {
    inputCopy[i] = inputCopy[i].replace(vowelMatch, '');
  }

  return inputCopy;
}

