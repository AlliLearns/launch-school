// Fibonacci Numbers (Procedural)
// In the previous exercise, we developed a recursive solution 
// for computing the `nth` Fibonacci number. In a language 
// that is not optimized for recursive, some (but not all) 
// recursive functions can be extremely slow and may require
// massive quantities of memory and/or stack space. If you tested
// for bigger `nth` numbers, you might have noticed that getting the 
// `50th` fibonacci number already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-
// recursive (or Procedural) function. Rewrite your recursive 
// `fibonacci` function so that it computes its results without 
// using recursion. 
// Note that JavaScript can accurately compute integers up to 16 digits
// long; this means that `fibonacci(78)` is the largest Fibonacci 
// number that you can accurately compute with simple operations in 
// JavaScript.

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// 0628 - 0637

/*
  PROBLEM
    input is a number representing the nth entry in the Fibonacci sequence
    output is the number after n iterations


  ALGORITHM
    crete an array `arr` and init to [1, 1, 2]
    if n is less than 3, return arr[n - 1]
    create `count` and init to `3`
    start indefinite iteration
      cycleFibonacciSeries(arr)
      count += 1
      if the count is equal to the input `n`, break
    end iteration boundary
    return the last value in arr

    function cycleFibonacciSeries(arr) {
      arr.shift();
      arr.push(arr[0] + arr[1]);
    }
*/

function fibonacci(n) {
  const arr = [1, 1, 2];
  if (n <= 3) return arr[n - 1];

  let count = 3;
  while (true) {
    cycleFibonacciSeries(arr);
    count += 1;
    if (count >= n) break;
  }

  return arr[arr.length - 1];
}

function cycleFibonacciSeries(arr) {
  arr.shift();
  arr.push(arr[0] + arr[1]);
}

// Solved in nine minutes on first pass