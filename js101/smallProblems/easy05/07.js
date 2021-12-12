// Multiply Lists
// Write a function that takes two array arguments,
// each containing a list of numbers, and returns 
// a new array that contains the product of each pair
// of numbers from the arguments that have the same index.
// You may assume that the arguments contain the same
// number of elements. 

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

/*
  PROBLEM
    input is two arrays of numbers
    output is a single array of numbers
    multiply numbers at the same index and return the array
    arrays will have the same length
    assume integer values

  ALGORITHM
    create empty array
    iterate over first array
    multiply value at first array with index at second array
    push each element onto empty array
    return created array
*/

function multiplyList(arr1, arr2) {
  return arr1.map((num, i) => num * arr2[i]);
}