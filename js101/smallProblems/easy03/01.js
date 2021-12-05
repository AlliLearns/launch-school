// PROBLEM
// Write a function that takes a string argument
// and returns a new string that contains the 
// value of the original string with all consecutive 
// duplicate characters collapsed into a single char. 

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

/*
  INPUT   String
  OUTPUT  New String 
  RULES   assume only string inputs. 
          empty string inputs will return an empty string
          single-character strings will return the single character
          strings include alphanumeric characters, including digits. 
          collapse consecutive duplicate characters. 
  DATA    string primitives
  ALGORITHM
    - function crunch(str)
      - If the string is empty or one character, return `str`
      (I can break this into an array of characters)
      (and append non-repeating characters to a new array)

      - declare new array `chars` and initialize it to the evaluation of split `str` into it on the empty string
      - declare new array `noRepeat` and initialize it to an empty array.

      - iterate over chars (up to second to last element.)
        - if the next element in `chars` is not equal to the current element, 
          - append `char` to `noRepeat`. 
      - end loop

      - append the last character of `chars` to `noRepeat`

      - join `noRepeat` into new string `result`
      - return `result`
*/

function crunch(str) {
  if (str.length === 0 || str.length === 1) return str;

  const chars = str.split('');
  const noRepeat = [];

  for (let i = 0; i < chars.length - 1; i++) {
    if (chars[i] !== chars[i + 1]) noRepeat.push(chars[i]);
  }

  noRepeat.push(chars[chars.length - 1]);

  const result = noRepeat.join('');
  return result; 
}