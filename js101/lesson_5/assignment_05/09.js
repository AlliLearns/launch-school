// Given the following data structure, return 
// a new array with the same structure, but 
// with the values in each subarray ordered, 
// alphabetically or numerically as appropriate
// in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

/*
  INPUT   array of arrays of strings or numbers
  OUTPUT  array of arrays of strings or numbers
  RULES   handle sorting with both strings and numbers
          will only have to worry about sorting with strings and numbers
          return a new array, don't modify the original
          internal arrays will be the same type throughout
  DATA    arrays
  ALGORITHMS
    function sortAscending(arr) 
      - map `arr` to `internalArr`
        - sort elements of internal array based on type.
      - return map solution
*/

function sortAscending(arr) {
  return arr.map((internalArr) => {
    switch (typeof internalArr[0]) {
      case 'string': return internalArr.slice().sort();
      case 'number': return internalArr.slice().sort((a, b) => a - b);
      default: return internalArr;
    }
  })
}

console.log(sortAscending(arr));
console.log(arr);