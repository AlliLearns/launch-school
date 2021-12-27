// Sum Square - Square Sum
// Write a function that computes the difference between
// the square of the sum of the first `count` positive 
// integers and the sum of the squares of the first `count`
// positive integers. 

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

/*
  PROBLEM
    input is an integer representing `count`
    output is an integer 
    output represents `square of sums` - `sum of squares`
    range is [1, count]

  ALGORITHM
    create a variable sum
    create a variable sumOfSquares
    iterate through [1, count]
      add the current value of the iterator to `sum`
      add teh square of the current value of the iterator to `sumOfSquares`
    end iteration
    return `sum` squared - `sumOfSquares`
*/

function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= count; i++) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}

// First completed in five minutes