// Write a function that computes the sum of all numbers
// between `1` and some other number, inclusive, that are 
// multiples of `3` or `5`. For instance, if the supplied 
// number is `20`, the result should be `98`. You may 
// assume that the number passed in is an integer greater
// than `1`.

/*
  PROBLEM
    input is an integer greater than 1
    output is an integer
    output is the sum of all numbers from [1, n] that are multiples of 3 or 5.

  ALGORITHM
    declare variable `sum` and init to 0.
    iterate from 1 to num inclusive
      if iterator is a multiple of 3 or 5, add iterator to `sum`
    end iteration
    return `sum`
*/

function multisum(num) {
  let sum = 0

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168