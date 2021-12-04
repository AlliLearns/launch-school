// Write a function that computes the sum of all numbers
// between `1` and some other number, inclusive, that are 
// multiples of `3` or `5`. For instance, if the supplied 
// number is `20`, the result should be `98`. You may 
// assume that the number passed in is an integer greater
// than `1`.

/*
  INPUT   maximum integer
  OUTPUT  sum of integers
  RULES   sum integers from 1 to n if integer is multiple of 3 or 5. 
          assume that the number passed in will be an integer
  DATA    primitive number
  ALGORITHM
    - function multisum(num)
      - declare `sum` and init to `0`.
      - loop through 1 to num inclusive
        - add loop counter if counter is a multiple of 3 or 5
      - return `sum`
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