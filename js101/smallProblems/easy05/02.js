// Combining Arrays
// Write a function that takes two arrays as
// arguments and returns an array containing 
// the union of the values from the two. There
// should be no duplication of values in the 
// returned array, even if there are duplicates
// in the original arrays. You may assume that
// both arguments will always be arrays.

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/*
  PROBLEM
    input is two arrays of integers
    output is one array that is the union of the sets
    no duplicates in the output array
    both arguments will always be arrays

  ALGORITHM
    create new array and assign it to the first argument
    iterate over second array and add value if not already present
    return new array
*/

function union(arr1, arr2) {
  const set = arr1.slice();

  for (let i = 0; i < arr2.length; i++) {
    if (!set.includes(arr2[i])) set.push(arr2[i]);
  }

  return set;
}
