// Given the following data structure, 
// use the `map` method to return a 
// new array identical in structure 
// to the original, but with each 
// number incremented by `1`. Don't 
// modify the original structure. 


let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


/*
  INPUTS    array of objects
  OUTPUTS   array of objects
  RULES     increment each object value by 1
            don't mutate the input array
  DATA      objects and arrays
  ALGORITHMS
    function incrementValues(arr)
      - map arr to obj
        - copy obj to `returnObj`
        - increment each value in `returnObj` by 1.
        - return `returnObj`
      - return map result
*/

function incrementValues(arr) {
  return arr.map(obj => {
    const returnObj = Object.assign({}, obj);
    return incrementObjectValues(returnObj);
  })
}


function incrementObjectValues(obj) {
  for (const key in obj) {
    obj[key] += 1;
  }
  return obj;
}

console.log(incrementValues(arr));
console.log(arr);