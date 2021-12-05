// Write a function that takes a positive integer `n`
// as an argument and logs aright triangle whose sides
// each have `n` stars. The hypotenuse of the triangle 
// should have one end at the lower-left of the triangle,
// and the other end at the upper-right.

triangle(5);
triangle(9);

/*
  INPUT   number
  OUTPUT  printing
  RULES   print a triangle of stars
  DATA    primitive numbers and strings
  ALGORITHM
    - function triangle(num) 
      - iterate from 0 to num inclusive
        - log `${' '.repeat(num - index)}${'*'.repeat(index)}`
      - end loop
*/

function triangle(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${' '.repeat(num - i)}${'*'.repeat(i)}`);
  }
}