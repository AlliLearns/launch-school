/*  SCRABBLE SCORE
  Write a program that, given a word, computes the Scrabble score for that word. 

  Letter 	Value
    A, E, I, O, U, L, N, R, S, T 	1
    D, G 	                        2
    B, C, M, P 	                  3
    F, H, V, W, Y 	              4
    K 	                          5
    J, X 	                        8
    Q, Z 	                        10

  How to score
  Sum the values of all the tiles used in each word. For instance, consider the word 
  `CABBAGE`. The score is 14: 3 + 1 + 3 + 3 + 1 + 2 + 1
*/

/*
  PROBLEM
    input is a word for which we need to compute the scrabble score
    output is a number that will represent the scrabble score of the input word
    each letter, including repeated letters, count towards the total
    we will need to deal with invalid input
    words are case-insensitive

  EXAMPLES AND TEST CASES
    class Scrabble
      - constructor: takes the input and saves it for later use
      - `score` instance method: takes no arguments and returns the score for the word given by the constructor
      - `score` static method: takes an argument that represents the word whose score you want and returns the score. 
      - helper methods are a possibility

  DATA STRUCTURES
    - strings
    - numbers
    - an object to keep track of the score map
    - maybe an array to calculate the final score

  ALGORITHM
    create a static property `SCORES` and init to an object that represents the scores of Scrabble

    constructor(scrabbleWord)
      if the type of `scrabbleWord` is not a string, reassign `scrabbleWord` to an empty string
      trim all whitespace out of `scrabbleWord`
      store `scrabbleWord` for later use
    end constructor

    score instance method()
      if the length of the class's `scrabbleWord` is zero, return 0
      declare a `sum` variable and init to 0
      declare a `word` variable and init to uppercase version of `scrabbleWord`
      iterate over the characters of `word`
        add the current character's score to `sum`
      end iteration

      return `sum`
    end score instance method

    score static method(scrabbleWord)
      invoke the constructor using `scrabbleWord` as its argument
      invoke the `score` instance method
    end score static method
*/

class Scrabble {
  static SCORES = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'], 
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  }

  constructor(scrabbleWord) {
    if (typeof scrabbleWord !== "string") scrabbleWord = "";
    scrabbleWord = scrabbleWord.trim();
    this.scrabbleWord = scrabbleWord;
  }

  score() {
    if (this.scrabbleWord.length === 0) return 0;

    let sum = 0;
    const word = this.scrabbleWord.toUpperCase();

    for (let i = 0; i < word.length; i++) {
      const scores = Scrabble.SCORES;
      const char = word[i];
      
      for (let key in scores) {
        const chars = scores[key];
        if (chars.includes(char)) sum += Number(key);
      }
    }

    return sum;
  }

  static score(scrabbleWord) {
    return new Scrabble(scrabbleWord).score();
  }
}

module.exports = Scrabble;