// Lettercase Counter
// Write a function that takes a string and returns
// an object containing three properties: one representing
// the number of characters in the string that are lowercase 
// letters, one representing the number of characters that are 
// uppercase letters and one representing the number of 
// characters that are neither. 

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

/*
  PROBLEM
    input is a string
    output is an object
    output object contains three properties: 'lowercase', 'uppercase', 'neither'
    the function will fill the values of these based on counts from the input string
    whitespace counts as a character

  ALGORITHM
    create a new object and init properties with values at 0

    separate string into alphabetic characters and symbols
    add the symbol count to obj.neither

    iterate over alphabetic string values
      if char is uppercase, increment obj.uppercase
      if char is lowercase, increment obj.lowercase
    end iteration
    return object
*/

function letterCaseCount(str) {
  const counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  const symbols = str.replace(/[a-z]/gi, '');
  const alphabet = str.replace(/[^a-z]/gi, '');

  counts.neither = symbols.length;

  for (let i = 0; i < alphabet.length; i++) {
    const char = alphabet[i];
    if (char.toLowerCase() === char) counts.lowercase += 1;
    if (char.toUpperCase() === char) counts.uppercase += 1;
  }

  return counts;
}