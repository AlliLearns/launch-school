// Double Char (Part 02)
// Write a function that takes a string, doubles
// every consonant character in the string and 
// returns the result as a new string. The 
// function should not double vowels, digits, 
// punctuation or whitespace.

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

/*
  PROBLEM
    input is a string
    output is a string
    double every consonant character
    case-sensitive

  ALGORITHM
    create an array of consonants
    make a new string `doubled`
    iterate over the input string
      if character is a consonant, concat it twice on `doubled`
      if not, concat once on `doubled`
    end iteration
    return `doubled`  
*/

function doubleConsonants(str) {
  const consonants = [...'bcdfghfklmnpqrstvwxyz'];
  const chars = [...str]
  let doubled = '';
  for (let i = 0; i < chars.length; i++) {
    if (consonants.includes(chars[i])) doubled += `${chars[i]}${chars[i]}`;
    else doubled += `${chars[i]}`;
  }

  return doubled;
}