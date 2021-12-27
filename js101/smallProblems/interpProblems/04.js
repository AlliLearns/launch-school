// Seeing Stars
// Write a function that displays an 8-pointed star in an n x n grid. 
// Where n is an odd integer that is supplied as an argument to the 
// function. The smallest start you need to handle is a 7 x 7 grid. 

star(5);
star(7);
star(9);
star(11);
star(13);

// star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

/*
  PROBLEM
    input is an odd integer with minimum number 7
    output is the printing of an 8-pointed star
    middle of the star is n stars in length (middle is ceiling of n / 2)
    moving outward we have...
      leading spaces: ...2, 1, 0
      spaces between stars: 0, 1, 2...
      each line has exactly 3 stars
      iterator: 7, 5, 3, 1...

  ALGORITHM
    return if input is smaller than 7
    create empty array
    iterate over range [n, 1] with decrements by 2
      if iterator is maximum, push full line of stars
      else push a line pattern and unshift a line pattern onto the array
    end iteration
    print each array entry on its own line

    printing a line is...
      * repeated n times for center (iterator == 7)
      leading space repeated (iterator - 1) / 2
      spaces between repeated ((max - 2 - n) / 2)
*/

function star(count) {
  if (count < 7) return;
  const star = [];

  for (i = count; i > 0; i -= 2) {
    if (i === count) star.push(buildLine(i, count));
    else {
      star.push(buildLine(i, count));
      star.unshift(buildLine(i, count));
    }
  }

  star.forEach(elem => console.log(elem));
}

function buildLine(n, max) {
  if (n === max) return '*'.repeat(max);
  const leadingSpaces = ' '.repeat((n - 1) / 2);
  const spacesBetween = ' '.repeat((max - 2 - n) / 2);
  return `${leadingSpaces}*${spacesBetween}*${spacesBetween}*`;
}