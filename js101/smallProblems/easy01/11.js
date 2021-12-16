// Write a function that determines and returns 
// the UTF-16 string value of a string passed in as 
// an argument. The UTF-16 string value is the sum of 
// the UTF-16 values of every character in the string. 

/*
  PROBLEM
    input is a string
    output is a number
    output number represents the sum of the UTF-16 values of each char of the input string
    assume characters are included in this 
    assume that if the string is empty, we return 0

  ALGORITHM
    if the length of the string is 0, return 0
    split the input string into an array of characters
    iterate over array 
      sum UTF-16 values of each character
    end iteration
    return sum
*/

function utf16Value(str) {
  if (str.length === 0) return 0;
  const chars = str.split('');
  return chars.reduce((sum, char) => sum + char.charCodeAt(), 0);
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811