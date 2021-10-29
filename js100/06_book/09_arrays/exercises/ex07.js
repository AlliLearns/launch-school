// Use `reduce` to compute the sum of the squares of 
// all of the numbers in an array: 

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(arr) {
    return arr.reduce((accumulator, num) => accumulator + (num*num), 0);
}

/** Reduce 
 * arr.reduce(callbackFunc, startingAccumulator);
 * 
 * const startingAccumulator = 0 //for sum. 
 * function callbackFunc(prevResult, element) {
 *   return prevResult + element;
 * }
 * */ 

// const startingAccumulator = 0;
// function addCallback(prevResult, currentElement) {
//     return prevResult + currentElement;
// }

// const sum = array.reduce(addCallback, startingAccumulator);
// console.log(sum);