// Fibonacci Numbers (Memoization)
// Our recursive `fibonacci` function from an earlier exercise isn't 
// very efficient. It starts slowing down with an `nth` argument as 
// low as `35`. One way to improve the performance of our recursive 
// `fibonacci` function (and other recursive functions) is to use 
// memoization. 

// Memoization is an approach that involves saving a computed answer for
// future reuse, instead of computing it from scratch every time it is 
// needed. In the case of our recursive `fibonacci` function, using 
// memoization saves calls to `fibonacci(nth - 2)` because the necessary
// values have already been computed by the recursive calls to `fibonacci(nth - 1)`.
// For this exercise, your object is to refactor the recursive `fibonacci` function
// to use memoization. 

