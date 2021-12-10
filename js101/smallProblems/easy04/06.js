// Palindromic Numbers
// Write a function that returns `true` if its integer
// argument is palindromic or `false` otherwise. 
// A palindromic number reads the same forwards and 
// backwards. 

/*
  PROBLEM
    takes a numeric input
    returns a boolean value
    checks whether a number reads the same forwards and backwards
    assume integer inputs

  DATA
    primitive values

  ALGORITHM
    turn the number into a string
    check if the string reads the same as its reverse
*/

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

function isPalindromicNumber(num) {
  const strRep = String(num);
  return isPalindrome(strRep);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}