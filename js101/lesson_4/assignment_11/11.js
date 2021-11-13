// Create an object that expresses the 
// frequency with which each letter occurs 
// in a given string.

let statement = "The Flintstones Rock";

// --------------------------

// Account for case-sensitivity.
// Remove spaces (forgot about this assumption.)
/*
- Split str into new character array.
- Create result object.
- Iterate over character array and check: 
- If the current character is not part of the object, add it and init to 1.
- If the current character is part of the string, add 1 to its value.
- Return result.
*/

function countCharacters(str) {
  const result = {};
  const characters = str.split('').filter(char => char !== " ");

  characters.forEach(char => {
    if (!Object.keys(result).includes(char)) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  });

  return result;
}


console.log(countCharacters(statement));

