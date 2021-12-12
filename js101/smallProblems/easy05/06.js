// Multiplicative Average
// Write a function that takes an array of integers
// as input, multiplies all of the integers together,
// divides the result by the number of entires in the
// array and returns the result as a string with the value
// rounded to three decimal places. 

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/*
  PROBLEM
    input is an array of integer numbers
    output is a string
    ((multiply all of the values) / divide by the number of values) to 3 sigfigs.

  ALGORITHM
    declare `product` and init to product of all array numbers
    divide by the array length
    return a string version of 3 decimal places
*/

function multiplicativeAverage(arr) {
  let result = arr.reduce((prev, curr) => prev * curr) / arr.length;
  return result.toFixed(3);
}