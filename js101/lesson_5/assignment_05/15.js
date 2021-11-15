// Given the following data structure, 
// write some code to return an array 
// which contains only the objects where
// all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

/*
  INPUT   array of objects
  OUTPUT  array of objects
  RULES   don't mutate original array
          filter out arrays that have odd values
  DATA    objects and arrays
  ALGORITHMS
    function filterOdds(arr) 
      - grab the array's object entries
      - isolate the object's array values
      - check if all elements in `value` are even
      - return the object whose array elements are all even
      - return the returned objects in a new array
*/

function filterOdds(arr) {
  return arr.filter(obj => {
    const values = Object.values(obj);

    return values.every(subArr => {
      return subArr.every(num => num % 2 === 0);
    });
  });
}


console.log(filterOdds(arr));