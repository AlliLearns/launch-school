// Using the `multiply()` function from the last
// exercise, write a function that computes 
// the square of its argument.


const multiply = (num1, num2) => num1 * num2;
const square = (num) => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true