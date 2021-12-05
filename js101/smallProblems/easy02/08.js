// Write a function that returns an array 
// that contains every other element of an
// `Array` that is passed in as an argument.
// The values in the returned list should be 
// those values that are in the 1st, 3rd, 5th, 
// and so on elements of the argument Array.

/*
  INPUT   input is an array
  OUTPUT  output is a new array
  RULES   output array is every odd element of input array
          assume array input. 
  DATA    arrays
  ALGORITHM
    - function oddities(arr) 
      - declare `oddIndices` and init to empty array
      - iterate over `arr` and add the odd elements onto `oddIndices`
      - (an odd element is not an odd index) So this will actually need the even indices. 
      - return `oddIndices`
*/

function oddities(arr) {
  const oddIndices = [];

  for (let i = 0; i < arr.length; i += 2) {
    oddIndices.push(arr[i]);
  }

  return oddIndices;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []