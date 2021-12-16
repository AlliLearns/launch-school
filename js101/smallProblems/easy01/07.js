// Write a function that takes two strings as 
// arguments, determines the length of the two 
// strings, and then returns the result of 
// concatenating the shorter string, the longer
// string and the shorter string once again.
// You may assume that the strings are different lengths.

/*
  PROBLEM
    input of two strings 
    output is one string
    output is the concat of the input strings alternated shortest-longest-shortest
    strings are different lengths
    assume only string inputs

  ALGORITHM
    if the second string is shorter than the first string, swap the strings
    return the result of `${str1}${str2}${str1}`
*/

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) [str2, str1] = [str1, str2];
  return `${str1}${str2}${str1}`;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"