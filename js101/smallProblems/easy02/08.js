// Write a function that returns an array 
// that contains every other element of an
// `Array` that is passed in as an argument.
// The values in the returned list should be 
// those values that are in the 1st, 3rd, 5th, 
// and so on elements of the argument Array.

/*
  PROBLEM
    input is an array
    output is an array of every other element of the input array
    start the count at the 1st element (index 0)

  ALGORITHM
    iterate over the array, starting at 0 and jumping by 2
      push input array's value onto output array
    end iteration

    return output array
*/

function oddities(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []