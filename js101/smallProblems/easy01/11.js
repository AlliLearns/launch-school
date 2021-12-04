// Write a function that determines and returns 
// the UTF-16 string value of a string passed in as 
// an argument. The UTF-16 string value is the sum of 
// the UTF-16 values of every character in the string. 

/*
  INPUT   string
  OUTPUT  number
  RULES   sum the UTF-16 values of each character in a string
          don't assume that input will be a string.
  DATA    strings or others that can be converted into a string
          arrays
  ALGORITHM
    - function utf16Value(str)
      - reassign `str` to String(str)
      - split the string into an array of its characters
      - declare `sum` variable and init to 0
      - loop over array
        - convert character to UTF-16 value
        - Add value to `sum`
      - return `sum`
*/

function utf16Value(str) {
  str = String(str);
  const chars = str.split('');
  let sum = 0;

  for (let i = 0; i < chars.length; i++) {
    let charValue = chars[i].charCodeAt();
    sum += charValue;
  }

  return sum;
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