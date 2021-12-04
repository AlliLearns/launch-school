// Write a function that takes two strings as 
// arguments, determines the length of the two 
// strings, and then returns the result of 
// concatenating the shorter string, the longer
// string and the shorter string once again.
// You may assume that the strings are different lengths.

/*
  INPUT   two strings
  OUTPUT  one string
  RULES   concatenate them with the shorter one once to either side of the longer one
  DATA    primitive strings
  ALGORITHM
    - function shortLongShort(str1, str2)
      - declare `len1` and init it to `str1.length`
      - declare `len2` and init it to `str2.length`
      - declare `result` and init to the empty string.

      - if len1 < len 2 {
        result = `${str1}${str2}${str1}`
      } else 
        result = `${str2}${str1}${str2}`
      }

      - return result
*/

function shortLongShort(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  let result = '';

  if (len1 < len2) {
    result = `${str1}${str2}${str1}`;
  } else {
    result = `${str2}${str1}${str2}`;
  }

  return result;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"