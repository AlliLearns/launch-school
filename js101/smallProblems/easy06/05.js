// Always Return Negative
// Write a function that takes a number as an argument.
// If the argument is a positive number, return the 
// negative of that number. If the argument is a 
// negative number, return it as-is.

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(-0));     // -0


/*
  PROBLEM
    input is a number
    output is also a number

  ALGORITHM

*/

function negative(num) {
  const sign = Math.sign(num);
  switch(sign) {
    case 1:  return -num;
    case 0:  return -0;
    default: return num;
  }
}


console.log(-0 > 0);     // false
console.log(-0 < 0);     // false