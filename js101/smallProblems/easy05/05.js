// Combine Two Lists
// Write a function that combines two arrays passed as
// arguments, and returns a new array that contains all
// elements from both array arguments, with each element taken 
// in alternation. You may assume that both input arrays are 
// non-empty and that they have the same number of elements.

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*
  PROBLEM
    two arrays with any arguments and any length.
    new array that contains all elements from both arrays arranged in alternation.
    both arrays are non-empty
    both arrays are the same number of elements

  ALGORITHM
    create new empty array
    iterate through the length of one of the given arrays
      push element at current index onto new array for each input array
    return new array
*/ 

function interleave(arr1, arr2) {
  const mergedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArr.push(arr1[i]);
    mergedArr.push(arr2[i]);
  }

  return mergedArr;
}
