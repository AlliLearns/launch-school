// Running Totals
// Write a function that takes an array of numbers and 
// returns an array with the same number of elements, 
// but with each element's value being the running 
// total from the original array. 

/*
  PROBLEM
    input is an array of integers
    output is an array of integers
    the values of the output array elements are the total of the previous elements
  DATA
    arrays

  ALGORITHM
    iterate through input array elements
    return the sum of the array elements up to and including the current index
*/

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

function runningTotal1(arr) {
  if (arr.length === 0) return [];
  
  let sum = 0;
  return arr.map(num => sum += num);
}
