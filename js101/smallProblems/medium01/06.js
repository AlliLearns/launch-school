// Fibonacci Numbers (Recursion)
// The Fibonacci series is a sequence of numbers in which each
// number is the sum of the previous two numbers. The first two 
// Fibonacci numbers are `1` and `1`. The third number is `1 + 1 = 2`
// the fourth is `1 + 2 = 3`, the fifth is `2 + 3 = 5` and so on. 
// In mathematical terms, this can be represented as: 

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

// This simple sequence can be computed using a recursive function.
// A recursive function is one in which the function calls itself. 
// For example, the following function is a recursive function that 
// computes the sum of all integers between `1` and `n`. 

function sum(num) {
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

// A good recursive function has three primary qualities: 
// It calls itself at least once.
// It has an ending condition. 
// The results of each recursion are used in each step.

// Write a recursive function that computes the `nth` Fibonacci number,
// where `nth` is an argument passed to the function. 
// NOTE: This exercises verges on the Advanced level of exercises, so
// do not be discouraged if you are not able to solve it on your own. 
// Recursion is tricky, and even experienced developers can have 
// difficulty dealing with it. 

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

// 0618 - 0627

/*
  PROBLEM
    input is a number that represents the `nth` Fibonacci number
    output is the Fibonacci number after that many iterations
    use recursion to solve the problem
    assume numerical input

  ALGORITHM
    function fibonacci(n, arr = [1, 1]) {
      if n is less than 2, return 1
      if the length of the fibonacci array is equal to n, return the array

      create a variable `lastElement` that contains the last element of `arr`
      create a variable `secLastElement` that contains the second to last element of `arr`
      sum the two elements and push it onto `arr`

      return the recursive call to `fibonacci` with arguments `n` and `arr`
    }
*/

function fibonacci(n, arr = [1, 1]) {
  if (n <= 2) return 1;
  if (arr.length === n) return arr[n - 1];

  const lastElement = arr[arr.length - 1];
  const secLastElement = arr[arr.length - 2];
  arr.push(lastElement + secLastElement);

  return fibonacci(n, arr);
}

// Solved in nine minutes on first pass

//0650 - 0656
/*
  ALTERNATIVE ALGORITHM (to keep the array length down)
  function fibonacci(n, arr = [1, 1, 2]) {
    if n is less than or equal to 3, return arr[n - 1]

    shift the array
    pop the next value on as arr[0] + arr[1]

    return fibonacci(n - 1, arr)
  }
*/

function fibonacci2(n, arr = [1, 1, 2]) {
  if (n <= 3) return arr[n - 1];

  arr.shift();
  arr.push(arr[0] + arr[1]);

  return fibonacci2(n - 1, arr);
}

console.log(`\n`);
console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(3));
console.log(fibonacci2(4));
console.log(fibonacci2(5));
console.log(fibonacci2(12));      // 144
console.log(fibonacci2(20));      // 6765

