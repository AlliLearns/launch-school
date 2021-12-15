// Reverse It (Part 02)
// Write a function that takes a string argument containing 
// one or more words and returns a new string containing
// the words from the string arguments. All five-or-more 
// letter words should have their letters in reverse order. 
// The string argument will consist of only letters and spaces.
// Words will be separated by a single space. 

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/*
  PROBLEM
    input is a string
    output is the reverse of each word of the string
    string will only contain letters and spaces
    words will be separated by a single space 

  ALGORITHM
    split the string on words. 
    iterate over words array
      split each word into an internal array
      reverse and join the internal array
    join it all back together again
*/

function reverseWords(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = words[i].split('').reverse().join('');
    }
  }

  return words.join(' ');
}