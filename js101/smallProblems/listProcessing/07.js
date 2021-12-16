// Sum of Sums
// Write a function that takes an array of numbers and 
// returns the sum of the sums of each leading subsequence
// in that array. Examine the examples to see what we mean. 
// You may assume that the array always contains at least
// one number. 

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/*
  PROBLEM
    input is an array of integer numbers
    output is a single integer number 
    output is the sum of the sums of each leading subsequence
    input array will always contain at least one number

  ALGORITHM

*/

function sumOfSums(arr) {
  if (arr.length === 1) return arr[0];
  
  const nums = subArrays(arr).flat();
  return nums.reduce((sum, num) => sum + num);
}

function subArrays(arr) {
  return arr.map((_, i) => arr.slice(0, i + 1));
}