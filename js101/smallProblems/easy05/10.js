// Array Average
// Write a function that takes one argument, an 
// array of integers, and returns the average of 
// all the integers in the array, rounded down 
// to the integer component of the average. 
// The array will never be empty, and the numbers
// will always be positive integers. 

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

/*
  PROBLEM
    input is an array of integers
    output is an integer number representing average of the input array 


  ALGORITHM
    sum the array elements
    divide by array length
    return the truncated value of the result
*/

function average(arr) {
  return Math.trunc(arr.reduce((prev, curr) => prev + curr) / arr.length);
}