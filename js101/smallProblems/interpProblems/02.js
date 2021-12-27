// Diamonds
// Write a function that displays a four-pointed diamond in an n x n grid. 
// Where n is an odd integer supplied as an argument to the function.
// You may assume that the argument will always be an odd integer.

diamond(1);
diamond(3);
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

/*
  PROBLEM
    input is an odd integer
    output is the printing of a four-pointed diamond in an n x n grid
    1, 3, 5, 7, 9, 7, 5, 3, 1
    9 - 1, 9 -3 ...

  ALGORITHM
    function createLine(n, max) 
      make a string with n stars
      fill the string with spaces on either side until it is max wide

    function createHollowLine(n, max) 
      5, [4, 6], [3, 7], [2, 8], [1, 9]
      front spaces: 8/2, 6/2, 4/2, 2/2, 0
      middleSpaces: 0, 1, 3, 5, 7


    create empty array `diamond`
    iterate from [n, 1] decremented by 2
      push createLine(i, n) onto `diamond`
    end iteration

    print each line of `diamond`
*/

function diamond(n) {
  const diamond = [];
  for (let i = n; i >= 1; i -=2) {
    if (i === n) diamond.push(createHollowLine(n, n));
    else {
      diamond.push(createHollowLine(i, n));
      diamond.unshift(createHollowLine(i, n));
    }
  }

  diamond.forEach(elem => console.log(elem));
}

function createLine(count, length) {
  const stars = '*'.repeat(count);
  const spaces = ' '.repeat(Math.floor((length - count) / 2));
  return `${spaces}${stars}`;
}

function createHollowLine(count, length) {
  if (count === 1) return `${' '.repeat(Math.ceil(length/2))}*`;

  count = count - 2;
  return `${' '.repeat((length - count) / 2)}*${' '.repeat(count)}*`;
}