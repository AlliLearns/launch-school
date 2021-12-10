// Palindrome Strings (Part 02)
// Write another function that returns `true` if the string 
// passed as an argument is a palindrome or `false` otherwise.
// This time, however, your function should be case-insensitive
// and should ignore all non-alphanumeric characters. If you 
// wish, you may simplify things by calling the `isPalindrome`
// function you wrote in your previous exercise. 

/*
  PROBLEM
    take in a string 
    return a boolean
    determine whether the given string is a palindrome
    check should be case-insensitive
    ignore non-alphanumeric characters

  DATA
    primitive types and arrays

  ALGORITHM
    strip the input string of all non-alphanumeric characters
    make the string lowercase
    reverse the string and check if it's equal to the original
*/

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

function isRealPalindrome(str) {
  str = stripString(str);
  str = str.toLowerCase();
  return isPalindrome(str);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function stripString(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}