// Word to Digit
// Write a function that takes a sentence string as an argument
// and returns that string with every occurrence of a 'number 
// word' converted to its corresponding digit character.



// 0608 - 0616 on first pass.

/*
  PROBLEM
    input is a string
    output is the same string with every occurrence of a number word replaced with its digit
    assume numbers will be less then ten

  ALGORITHM
    create an object that maps number names to digits 

    function wordToDigit(str) {
      break the string into an array
      iterate over the array
        if the word is part of the keys in the object, 
          replace the current element with the corresponding value
      end iteration
      return the joined array
    }
*/ 

const numberMap = {
  zero: 0,
  one: 1, 
  two: 2, 
  three: 3, 
  four: 4, 
  five: 5, 
  six: 6, 
  seven: 7, 
  eight: 8, 
  nine: 9,
}

function wordToDigit(str) {
  const words = str.split(' ');
  const keys = Object.keys(numberMap);

  for (let i = 0; i < words.length; i++) {
    
    if (keys.includes(words[i])) {
      words[i] = numberMap[words[i]];
    }
  }

  return words.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."