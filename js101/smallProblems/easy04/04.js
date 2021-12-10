// Palindromic Strings (part 01)
// Write a function that returns `true` if the string 
// passed as an argument is a palindrome, or `false`
// otherwise. A palindrome reads the same forwards 
// and backwards. For this problem, case matters and 
// all characters matter. 

/*
  PROBLEM
    Assume string input
    Will return a boolean indicating whether given string is a palindrome.
    Palindromes read the same forwards as backwards.
    Assume case matters.
    Assume all characters count, including symbols and digits. 

  DATA
    Strings...

  ALGORITHM
    Split the string into two new strings along the middle index.
    Return whether the first and second string are equal to one another.

    Split the string into two new strings along the middle index.
      Find the middle index of the string.
      Split the string into two new strings along that middle index.
        If the string length is odd, we'll have to split the string around the middle character.
        If it's even, we can split the string evenly. (LOOKUP how to split a string with an index)
      
      Reverse the second string.
      Return both strings

    (If the length is odd we'll have to exclude the middle character from both strings...)
*/

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

function isPalindrome(str) {
  const [str1, str2] = splitString(str);
  return str1 === str2;
}

function splitString(str) {
  const strLength = str.length;
  const middleIndex = Math.floor(strLength / 2);
  let str1 = '';
  let str2 = '';

  if (strLength % 2 === 0) {
    str1 = str.slice(0, middleIndex);
    str2 = str.slice(middleIndex);
  } else {
    str1 = str.slice(0, middleIndex);
    str2 = str.slice(middleIndex + 1);
  }

  str2 = str2.split('').reverse().join('');
  return [str1, str2];
}