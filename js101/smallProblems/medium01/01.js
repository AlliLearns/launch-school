// Rotation (Part 01)
// Write a function that rotates an array by moving the first 
// element to the end of the array. Do not modify the original
// array. If the input is not an array, return `undefined`. 
// If the input is an empty array, return an empty array.

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

/*
  PROBLEM
    input is an array of any element
    output is an array with the same content, but with the first element moved to the end of the array.
    input that is not an array will return `undefined`
    input that is an empty array will return an empty array
    assume that single-element arrays will return a copy of themselves

  ALGORITHM
    if input is not an array, return `undefined`
    if input array's length is one or less, return a copy of the input array
    make a copy of the input array
    shift the array copy into `firstElement`
    push `firstElement` onto array copy
    return the copied array
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length <= 1) return [...arr];

  const copy = [...arr];
  const firstElement = copy.shift();
  copy.push(firstElement);
  return copy;
}

// First solved in seven minutes.