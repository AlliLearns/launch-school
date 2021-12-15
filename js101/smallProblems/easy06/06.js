// Counting Up
// Write a function that takes an integer argument and 
// returns an array containing all integers between `1`
// and the argument (inclusive), in ascending order. 
// You may assume that the argument will always be a 
// positive integer. 

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

/*
  PROBLEM
    input is a positive integer
    output is an array of integers
    array contains integers in range [1 - num].

  ALGORITHM
    create new empty array
    for loop up to given num (1 to num inclusive)
    push the index value onto the new array
    return the new array
*/

function sequence(num) {
  const nums = [];

  for (let i = 1; i <= num; i++) {
    nums.push(i);
  }

  return nums;
}