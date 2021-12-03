// Write a function that takes one integer argument, which may be 
// positive, negative or zero. This method returns `true` if the 
// number's absolute value is odd. You may assume that the 
// argument is a valid integer value. 

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/*
  INPUT   integer number
  OUTPUT  boolean 
  RULES   return whether the number's abs value is odd
  DATA    primitive values - integers and booleans 
  ALGORITHM 
    - function isOdd(num)
      - if the absolute value of `num` is odd, return true. 
      - otherwise, return false.
      - a comparison returns a boolean, so we can return the evaluation of that. 
*/

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}