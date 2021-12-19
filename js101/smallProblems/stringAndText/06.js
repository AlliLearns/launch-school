// Staggered Caps (Part 01)
// Write a function that takes a string as an argument
// and returns that string with a staggered capitalization
// scheme. Every other character, starting from the first, 
// should be capitalized and should be followed by a lowercase
// or non-alphabetic character. Non-alphabetic characters 
// should not be changed, but should be counted as 
// characters for determining when to switch between upper
// and lower case.

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/*
  PROBLEM
    input is a string
    output is a string with staggered case
    staggered case means that the first char should be cap
    char following should be lowercase
    char following that should be cap
    non-alphabetic characters are left alone and count as part of the stagger
    
  ALGORITHM
    create `staggeredStr` and init to empty string
    iterate over the input string
      grab current char
      if iterator is even and char is alphabetic, concat cap version to `staggeredStr`
      if iterator is odd and char is alphabetic, concat lowercase version to `staggeredStr`
      else concat char to `staggeredStr`
    end iteration
    return `staggeredStr`
    
  ALTERNATE ALGORITHM
    break string into character array
    iterate over array 
      if char is non-alphabetic, add to output array
      if index is even, add cap to output array
      if index is odd, add lowercase to output array
    end iteration
    return joined output array
*/

function staggeredCase(str) {
  const chars = str.split('');
  const staggered = chars.map((char, i) => {
    if (char.match(/[^a-z]/i)) return char;
    if (i % 2 === 0) return char.toUpperCase();
    if (i % 2 === 1) return char.toLowerCase();
  });                          
  
  return staggered.join('');
}