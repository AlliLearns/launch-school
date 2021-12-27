// Tri-Angles
// A triangle is classified as follows: 
// Right: One angle is a right angle (exactly `90` degrees)
// Acute: All three angles are less than `90` degrees
// Obtuse: One angle is greater than `90` degrees.

// To be a valid triangle, the sum of the angles must be exactly
// `180` degrees, and every angle must be greater than `0`. If 
// either of those conditions is not satisfied, the triangle is 
// invalid. 

// Write a function that takes the three angles of a triangle as
// arguments and returns one of the following four strings 
// representing the triangle's classification. 

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

// You may assume that all angles have integer values, so you do
// not have to worry about floating point errors. You may also 
// assume that the arguments are in degrees. 

/*
  PROBLEM
    input is three integers representing angles
    output is a string that states what kind of triangle these angles define
    a valid triangle must have all degrees greater than 0 and the sum of their angles must be exactly 180 degrees
    a right triangle has one 90 degree angle
    a acute triangle has all angles less than 90 deg
    an obtuse angle has one angle that's larger than 90 deg

  ALGORITHM
    create a constant RIGHT and init to 90
    sort the input values from smallest to largest
    if the first value is 0, return 'invalid'
    if their sum is not 180, return 'invalid'
    if the largest is larger than 90, return 'obtuse'
    if the group contains a 90, return 'right'
    if the group sum is smaller than 270, return 'acute'
*/

function triangle(...degs) {
  const RIGHT = 90;
  const sorted = [...degs].sort((a, b) => a - b);
  const sum = sorted.reduce((sum, curr) => sum + curr);

  if (sorted[0] === 0) return 'invalid';
  if (sum !== 180) return 'invalid';

  if (sorted[sorted.length - 1] > RIGHT) return 'obtuse';
  if (sorted.some(deg => deg === RIGHT)) return 'right';
  return 'acute';
}

// First attempt took fourteen minutes.