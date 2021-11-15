// Given the following data structure, 
// write some code that returns an object
// where the key is the first item in 
// each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

/*
  INPUT   nested arrays
  OUTPUT  object containing array data
  RULES   assume array structure will be a nested array with two values
  DATA    objects and arrays
  ALGORITHM
    function extractObject(arr) 
      - create empty object `result`
      - iterate through array to grab subarrays
        - isolate first value in each level-1 array
        - isolate second value in each level-1 array
        - build new object from key,value pairs
      - return `result`
*/

function extractObject(arr) {
  const result = {};

  arr.forEach(subArr => {
    result[subArr[0]] = subArr[1];
  })

  return result;
}

console.log(extractObject(arr));

// Right. I forgot that Object.fromEntries(arr) exists.