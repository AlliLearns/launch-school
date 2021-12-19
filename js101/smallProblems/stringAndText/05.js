// Swap Case
// Write a function that takes a string as an argument
// and returns that string with every lowercase letter
// changed to uppercase and every uppercase letter changed
// to lowercase. Leave all other characters unchanged.

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

/*
  PROBLEM
    input is a string 
    output is a string with the case of the input characters swapped
    all other characters will be left alone
    
  ALGORITHM
    create `swappedCase` and init to empty string
    iterate over the input string
      grab the current character
      if the current character is lowercase, concat uppercase to `swappedCase`
      if current character is uppercase, concat lowercase to `swappedCase`
      else concat character to `swappedCase`
    end iteration
    return `swappedCase`
*/

function swapCase(str) {
  let swappedCase = '';
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.toLowerCase() === char) {
      swappedCase += char.toUpperCase();
    } else if (char.toUpperCase() === char) {
      swappedCase += char.toLowerCase();
    } else swappedCase += char;
  }
  
  return swappedCase;    
}
