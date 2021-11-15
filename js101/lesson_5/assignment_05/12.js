// Given the following data structure, 
// use a combination of methods, including `filter`,
// to return a new array identical in structure
// to the original, but containing only the numbers
// that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

/*
  INPUT   array of numerical arrays
  OUTPUT  array of numerical arrays
  RULES   filter by multiples of 3
          don't mutate the original array
          use `filter` in solution
          leave empty arrays in result
  DATA    nested arrays
  ALGORITHMS
    function multiplesOfThree(arr) 
      - map arr to elements
        - filter `arr` on multiples of 3
        - return filtered arr
*/

function multiplesOfThree(arr) {
  return arr.map(element => {
    return element.filter(num => num % 3 === 0);
  });
}

console.log(multiplesOfThree(arr));
console.log(arr);
