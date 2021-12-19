// Capitalize Words
// Write a function that takes a string as an argument
// and returns that string with the first character of 
// every word capitalized and all subsequent characters
// in lowercase. You may assume that a word is any 
// sequence of non-whitespace characters.

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

/*
  PROBLEM
    input is a string
    output is the input string with all first chars capitalized 
    all subsequent chars are lower-cased 
    a word is any sequence of non-whitespace characters

  ALGORITHM
    split the input string on spaces
    iterate over the array
      iterate over the string
        if char is first char, capitalize
        else, lowercase
        update the word
      end inner iteration
    end iteration
    returned joined array
*/

function wordCap(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let newWord = '';
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (j === 0) char = char.toUpperCase();
      else char = char.toLowerCase();
      newWord = newWord + char;
    }

    words[i] = newWord;
  }

  return words.join(' ');
}