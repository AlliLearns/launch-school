// Grocery List
// Write a function that takes a grocery list in a 
// two-dimensional array. Each element in the grocery
// list contains a fruit name and a number that 
// represents the desired quantity of that fruit. The 
// output array is such that each fruit name appears 
// the number of times equal to its desired quantity. 

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
  PROBLEM
    input is a two-dimensional array
    output is a one-dimensional array 
    output array contains the name added the number of times given
    assume inner arrays will always contain two elements

  ALGORITHM
    create string `result`
    iterate over input array 
    concatenate the value of the first element in the current array n times
    return `result` split on spaces
*/

function buyFruit(arr) {
  let result = '';

  arr.forEach(([fruit, count]) => {
    result += `${fruit} `.repeat(count);
  })

  return result.trimEnd().split(' ');
}