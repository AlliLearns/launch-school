// Halvsies
// Write a function that takes an array as an argument
// and returns an array that contains two elements, each
// of which is an array. Put the first half of the original
// array elements in the first element of the return value
// and put the second half in the second element. If the 
// original array contains an odd number of elements, place
// the middle element in the first half array. 

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/*
  PROBLEM
    input is one array of zero or more numeric elements
    output is two arrays of 0 or more numeric elements
    split the input element into two arrays
    if there is an odd number of elements, put the middle element in the first array
    assume that the input array will not be sparse

  ALGORITHM
    find the floor of the middle index. 
    if the number of elements in the array is odd, add one to the middle index
    split the array on (0 to middleIndex) into the first array
    split the input array on (middleIndex) into the second array
    return the two arrays
*/

function halvsies(arr) {
  if (arr.length === 0) return [[], []];

  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) middleIndex += 1;

  const arr1 = arr.slice(0, middleIndex);
  const arr2 = arr.slice(middleIndex);

  return [arr1, arr2];
}