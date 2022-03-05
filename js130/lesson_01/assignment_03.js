// BASIC EMULATION PROBLEMS
/*  PROBLEM 01
  Write a function that acts like the built-in `Array.prototype.filter` method. For this problem
  you only need to emulate the most basic behavior: filtering elements of an array by examining
  the array values. You don't have to include the `thisArg` argument or support multiple arguments
  to the callback function, but feel free to add them if you like. Your function should work like this:
*/

console.log(`filter`);
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

// Don't mutate the input array

function filter1(array, callback) {
  const filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(array[i]);
    if (callbackResult) filteredArr.push(array[i]) 
  }

  return filteredArr;
}



/*  PROBLEM 02
  Write a function that acts like the built-in `Array.prototype.map` method. For this problem, 
  you only need to emulate the most basic behavior: transforming the elements of an array by 
  using the array values. You don't have to include the `thisArg` argument or support multiple arguments
  to the callback function, but feel free to add them if you like. Your function should work like this:
*/

console.log(``);
console.log(`map`);
let numbers2 = [1, 2, 3, 4, 5];
console.log(map(numbers2, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers2, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers2, () => false));
// => [ false, false, false, false, false ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values2, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function map1(array, callback) {
  const mappedArr = [];
  for (let i = 0; i < array.length; i++) {
    mappedArr.push(callback(array[i]));
  }

  return mappedArr;
}



// EMULATING AND USING `reduce` METHOD
/* PROBLEM 01
  Write a function that acts like the built-in `Array.prototype.reduce` method. For this problem, 
  you only need to emulate the most basic behavior: reducing the elements of an array down to a 
  single value based on the original array values. The result may be a primitive value, an object, 
  or another array. You don't have to include the `thisArg` argument or support multiple arguments
  to the callback function, but feel free to add them if you like. Your function should work like this:
*/

console.log(``);
console.log(`reduce`);
let numbers3 = [1, 2, 3, 4, 5];
console.log(reduce(numbers3, (accum, number) => accum + number));  // => 15
console.log(reduce(numbers3, (prod, number) => prod * number));    // => 120
console.log(reduce(numbers3, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));        // => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));   // => ["Curly", "Larry", "Mo"]


/*
  Notes on reduce
  Callback signature: function myReducer(accumulator, arrayElement) {}
  The accumulator represents a 'carry' value that returns whatever was 
  returned the last time the reducer callback was called. 
*/ 

function reduce(array, callback, initialValue) {
  if (array.length === 0) return initialValue;

  let result;
  let snippedArray;

  if (initialValue !== undefined) {
    result = callback(initialValue, array[0]);
    snippedArray = array.slice(1)
  } else {
    result = callback(array[0], array[1]);
    snippedArray = array.slice(2)
  }

  // console.log(`Array is: ${array}`);
  // console.log(`Result is: ${result}.`);
  // console.log(``);
  if (array.length === 1) return result;
  return reduce(snippedArray, callback, result);
}

// Their solution
function reduce2(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  while (index < array.length) {
    accumulator = callback(accumulator, array[index]);
    index += 1;
  }

  return accumulator;
}


/* PROBLEM 02
  `Array.prototype.reduce` can be an incredibly useful function. You're not limited to simple 
  accumulation-style processing, but can perform a wide variety of different tasks with it. For
  instance, you can emulate any of the standard Array methods, including `filter`, `map` and more. 

  Let's try it. Write a function that works like the `filter` function from problem 1. 
  This time though, you should use `Array.prototype.reduce` to filter the input array
*/

function filter(array, callback) {
  return array.reduce((filteredArr, elem) => {
    if (callback(elem)) filteredArr.push(elem)
    return filteredArr;
  }, []);
}


/* PROBLEM 03
  Let's put `reduce` to work with emulating `map` as well. Write a function that works like the `map` 
  function from problem 2. This time, though, use `Array.prototype.reduce` to transform the input array.
*/

function map(array, callback) {
  return array.reduce((mappedArr, elem) => {
    mappedArr.push(callback(elem));
    return mappedArr
  }, [])
}