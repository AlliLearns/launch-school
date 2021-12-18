// Write a function that takes a positive integer `n`
// as an argument and logs a right triangle whose sides
// each have `n` stars. The hypotenuse of the triangle 
// should have one end at the lower-left of the triangle,
// and the other end at the upper-right.

triangle(5);
triangle(9);

/*
  PROBLEM
    input is a positive integer
    output is printing a right triangle
    the triangle's side have n stars
    one end at lower-left and the other at upper-right

  ALGORITHM
    iterate over [0, inputNum]
      print the line of stars 
    end iteration
*/

function triangle(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${' '.repeat(num - i)}${'*'.repeat(i)}`);
  }
}