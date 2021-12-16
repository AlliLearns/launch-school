// Sum of Digits
// Write a function that takes one argument, a positive
// integer, and returns the sum of its digits. Do this 
// without using any loop constructs - use a series of 
// methods to perform the sum. 

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

/*
  PROBLEM
    input is a positive integer
    output is a positive integer
    output is the sum of a numbers digits
    do this without using loop constructs
    use a series of methods to perform the sum

  ALGORITHM
    turn the number into a string
    turn the string into an array of numbers
    return the reduced sum of the array
*/

function sum(num) {
  const digits = num.toString().split('');
  return digits.reduce((acc, elem) => acc + Number(elem), 0);
}