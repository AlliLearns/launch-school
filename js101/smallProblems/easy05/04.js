// Find the Duplicate
// Given an unordered array and the information
// that exactly one value in the array occurs 
// twice, determine which value occurs twice. 
// Write a function that will find and return 
// the duplicate value that is in the array.

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

/*
  PROBLEM
    input is an array of integers
    output is a single integer that represents a duplicated value
    there is only one duplicate value in the input array
    there is only one value for every other element in the input array
    assume that the input array will only contain positive integer numbers

  ALGORITHM
    copy the input array and sort the copy in ascending order
    iterate over the copy and return the value at the current index when it's the same as the last index.
*/

function findDup(arr) {
  const copy = arr.slice().sort((a, b) => a - b);
  let lastNum = 0;

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === lastNum) return lastNum;
    lastNum = copy[i];
  }
}