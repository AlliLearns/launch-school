// Sequence Count 
// Create a function that takes two integers as arguments. The 
// first argument is a `count`, and the second is the starting 
// number of a sequence that your function will create. The function
// should return an array containing the same number of elements as
// the `count` argument. The value of each element should be a multiple of 
// the starting number. 

// You may assume that the `count` argument will always be an integer
// greater than or equal to `0`. The starting number can be any integer.
// If the `count` is `0`, the function should return an empty array. 

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

/*
  PROBLEM
    input is two integer numbers
    output is an array
    output array is length of first argument 
    output array and contains elements of the additive of the second argument
    don't assume two numbers will always be available. 

  ALGORITHM
    if length is 0, return empty array
    create new empty array
    init accumulator to num

    iterate over given length 
      push next value in sequence to new array
      increment input num with sequence
    return array
*/

function sequence(length, num) {
  if (length === 0) return [];
  const result = [];
  let accumulator = num;

  for (let i = 0; i < length; i++) {
    result.push(accumulator)
    accumulator += num;
  }

  return result;
}