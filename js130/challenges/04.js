/* ANAGRAMS
  Write a program that takes a word and a list of possible anagrams and 
  selects the correct sub-list that contains the anagrams of the word. 

  For example, given the word 'listen' and a list of candidates like 
  'enlists', 'google', 'inlets' and 'banana' the program should return 
  a list containing 'inlets'. Please read the test suite for the 
  exact rules of anagrams. 
*/

/*
  PROBLEM
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
    input is a string that represents the word that should be checked for anagrams.
    output is an array of words that are anagrams of the input
    The anagrams of this program are required to be the same length as the original word.
    the anagrams of this program are required to be case-insensitive, but return the original word with case
    only unique anagrams count as part of the returned set
    assume no spaces will be included in input words 
    assume no phrases will be used as original word

  EXAMPLES AND TEST CASES
    Anagram class
      constructor 
      `match` method

    - Anagrams must be the same length
    - have the same exact letters
    - have the sane number of same letters
    - a word is not an anagram of itself
    - 

  DATA STRUCTURES: arrays

  ALGORITHM
    class Anagram
      - constructor that takes a word and saves it for later use
      - match: takes an array of words and returns an array of anagrams

    constructor: 
      takes a string as input
      saves the string for later use in `originalWord`
    end constructor

    match: 
      takes an array of strings that should be checked to see whether they're anagrams of `originalWord`
      outputs an array of strings that are anagrams of `originalWord`

      declare variable `word` and init to `originalWord` 
      declare `anagrams` and init to empty array
      begin iteration over input array
        if current word isAnagram of `word` and if current word is not part of `anagrams`, 
          push current word onto `anagrams`
      end iteration
      return `anagrams`
    end match


    private isAnagram:
      takes two words. The first is the original word, the second is a string that might be an anagram
      returns a boolean to indicate whether the second argument was an anagram of the first input

      return `false` if both arguments are different lengths
      return `false` if both arguments are the same word

      sort both 
      return `true` if sorted strings are equal
      return `false` otherwise
    end isAnagram
*/


class Anagram {
  constructor(pattern) {
    this.pattern = pattern;
  }

  match(arr) {
    const word = this.pattern;
    const anagrams = [];

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (this.isAnagram(word, current)) {
        anagrams.push(current);
      } 
    }

    return anagrams;
  }

  isAnagram(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    if (word1.length !== word2.length) return false;
    if (word1 === word2) return false;

    word1 = [...word1].sort().join('');
    word2 = [...word2].sort().join('');

    if (word1 === word2) return true;
    return false;
  }
}

module.exports = Anagram;