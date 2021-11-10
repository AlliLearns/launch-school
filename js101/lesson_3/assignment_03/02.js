// The `Array.prototype.reverse` method reverses 
// the order of elements in an array, and 
// `Array.prototype.sort` can rearrange the elements 
// in a variety of ways, including descending.

// Both of these methods mutate the original 
// array as shown below. Write two distinct ways 
// of reversing teh array without mutating 
// the original array. 

// Use `reverse` for the first solution. 
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Use `sort` for the second solution.
numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// ---------------------------------

numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.slice().reverse();
console.log(numbers2);

const numbers3 = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers3);

console.log();

// Bonus: Can you do it using the 
// `Array.prototype.forEach()` method? 
const numbers4 = [];

function reverseCallback(element) {
  numbers4.unshift(element);
}

numbers.forEach(reverseCallback);

console.log(`Bonus: `);
console.log(numbers);
console.log(numbers4);