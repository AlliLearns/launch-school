// Alphabetical Numbers
// Write a function that takes an array of integers 
// between `0` and `19` and returns an array of those
// integers sorted based on the English words for each number.


/*
   PROBLEM
      input is an array of integers
      output is an array of integers
      sort the input based on their english names

   ALGORITHM
      create an object of names for numbers to their values
      grab the entries of the array and sort it by the first element of each subarray
      return the second entry of each subarray
*/

// const numbers = [
//    "zero",      "one", 
//    "two",       "three",
//    "four",      "five", 
//    "six",       "seven", 
//    "eight",     "nine",
//    "ten",       "eleven",
//    "twelve",    "thirteen",
//    "fourteen",  "fifteen",
//    "sixteen",   "seventeen",
//    "eighteen",  "nineteen"
// ];

const numbers = {
   zero: 0,
   one: 1,
   two: 2,
   three: 3, 
   four: 4, 
   five: 5,
   six: 6,
   seven: 7,
   eight: 8,
   nine: 9,
   ten: 10,
   eleven: 11,
   twelve: 12,
   thirteen: 13, 
   fourteen: 14, 
   fifteen: 15,
   sixteen: 16, 
   seventeen: 17, 
   eighteen: 18, 
   nineteen: 19,
};


function alphabeticNumberSort(arr) {
   const sortedPairs = Object.entries(numbers).sort();
   console.log(sortedPairs);
   return sortedPairs.map(elem => elem[1]);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

