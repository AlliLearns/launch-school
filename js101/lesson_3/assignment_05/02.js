// Starting with the string: 

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a string that swaps
// the case of all the letters.

// --------------------------------


function switchCase(sentence) {
  let characters = sentence.split('');

  let swappedCase = characters.map(char => {
    if (char === char.toUpperCase()) { 
      return char.toLowerCase() 
    }

    return char.toUpperCase();
  })
  return swappedCase.join('');
}

console.log(switchCase(munstersDescription));