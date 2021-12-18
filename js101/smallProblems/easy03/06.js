// Madlibs is a siple game where you create a story 
// template with "blanks" for words. You or another 
// player then construct a list of words and place them 
// into the story, creating an often silly or funny story 
// as a result. 

// Create a simple madlib program that prompts for a noun, 
// a verb, an adverb and an adjective and injects them into 
// a story that you create. 

//['dog', 'walk', 'blue', 'quickly']


/*
  PROBLEM 
    input is user input
    output is a string that represents a madlib

    
  ALGORITHM
    - declare `readLine` and initialize it to require readline-sync

    - function prompt(message) 
      return readLine.question(`=> ${message}: `);

    - function madlibs()
      - declare `noun` and initialize it to prompt("Enter a noun");
      - declare `verb` and initialize it to prompt("Enter a verb");
      - declare `adjective` and initialize it to prompt("Enter an adjective");
      - declare `adverb` and initialize it to prompt("Enter an adverb");

      print to output: 
      `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
      + `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`
      + `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`
*/

const readLine = require('readline-sync');

function prompt(message) {
  return readLine.question(`=> ${message}: `);
}

function madlibs() {
  const noun = prompt('Enter a noun');
  const verb = prompt('Enter a verb');
  const adjective = prompt('Enter an adjective');
  const adverb = prompt('Enter an adverb');

  console.log(
    `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!\n`
    + `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\n`
    + `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.\n`
  );
}

madlibs();