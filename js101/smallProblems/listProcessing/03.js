// Multiply all Pairs
// Write a function that takes two array arguments, 
// each containing a list of numbers, and returns a 
// new array containing the products of all
// combinations of number pairs that exist between
// the two arrays. The returned array should be 
// sorted in ascending numerical order. You may
// assume that neither argument will be an empty array.

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/*
  PROBLEM 
    input is two array arguments, each containing a list of numbers
    output is a new array that contains the products of all combinations 
    returned array should be sorted in ascending numerical order
    neither input will be an empty array
    duplicated elements are allowed in the output array

  ALGORITHM
    create an empty array `products`
    iterate over first array
      iterate over second array
        push the result of first arr elem * second arr elem to `products`
      end inner iteration
    end outer iteration
    return numerically sorted `products`
*/

function multiplyAllPairs(arr1, arr2) {
  const product = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      product.push(num1 * num2);
    })
  })

  return product.sort((a, b) => a - b);
}