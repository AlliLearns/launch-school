// Palindromic Substrings
// Write a function that returns a list of all 
// palindromic substrings of a string. That is, 
// each substring must consist of a sequence of 
// characters that reads the same forward and 
// backward. The substrings in the returned list
// should be sorted by their order of appearance in 
// the input string. Duplicate substrings should 
// be included multiple times. 

// You should use the `substrings` function that 
// you wrote in the previous exercise. 

// For the purpose of this exercise, you could consider
// all characters and pay close attention to case. Assume
// that single characters are not palindromes. 

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/*
  PROBLEM
    input is a string
    output is an array
    output array contains all palindromic substrings
    a palindrome is a string that reads same forwards as backwards
    output array should be sorted in order of appearance
    duplicate entries are allowed
    assume delimited input
    assume all lowercase letter input
    assume input will contain no digits
    single-character substrings are not palindromes
    spaces should not be included in palindrome check
    other delimiters should be included in palindrome check

  ALGORITHM
    strip all non-alphanumeric characters
    create empty array `palindromes`
    create array `substrings` and init to substrings invocation

    for every substring in the stripped input string
    push onto palindromes if it is a palindrome

    return `palindromes`

*/


function palindromes(str) {
  str = stripSpaces(str);
  const substr = substrings(str);

  return substr.filter(isPalindrome);
}


function stripSpaces(str) {
  return str.replace(/\s/g, '');
}

function isPalindrome(str) {
  if (str.length === 1) return false;
  return str === str.split('').reverse().join('');
} 

function substrings(str) {
  return [...str].map((_, i) => leadingSubstrings(str.slice(i))).flat();
}

function leadingSubstrings(str) {
  return [...str].map((_, i) => str.slice(0, i + 1));
}