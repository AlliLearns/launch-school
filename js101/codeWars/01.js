// Problem 1
// Count letters in a string
// Count lowercase letters in a given string and return the letter 
// count in an object. Each character will be a key and the count 
// of each character will be the value. 

/*
  INPUT     string
  OUTPUT    object
  RULES     assume exclusion of whitespace, symbols and digits
            include only lowercase letters as part of the count and ignore uppercase letters
            return an empty object if the given string contains no lowercase characters
            return an empty object if no argument is passed.
  DATA      primitive values and objects
  ALGORITHM
    function countCharacters(str) {
      - if length of string is 0, return empty object

      - reassign `str` to result of `stripString(str)`
      - define `chars` and init to empty object

      - start iteration over `str`
        - set `char` to str[i]
        - if (char is not a key in the object) add the character with value 1
        - if (char is a key in the object) increment the character
      - end iteration

      - return `chars`
    }

    function stripString(str) {
      will remove all uppercase characters, symbols and digits
      return str.replace(/^[a-z]/g, '');
    }
*/

console.log(countCharacters("Hello everyone."));
console.log(countCharacters("12345."));
console.log(countCharacters("Welcome!"));
console.log(countCharacters("H$ll0 e&*ryon#."));
console.log(countCharacters());


function countCharacters(str) {
  if (str.length === 0) return {};

  str = stripString(str);
  const chars = {};

  for (let i = 0; i < str.length; i++) {
    if (!chars.hasOwnProperty(str[i])) chars[str[i]] = 0;
    chars[str[i]] += 1;
  }

  return chars;
}

function stripString(str) {
  str = String(str);
  return str.replace(/[^a-z]/g, '');
}

