// Rotation (Part 02)
// Write a function that rotates the last `count` digits of 
// a `number`. To perform the rotation, move the first of 
// the digits that you want to rotate to the end and shift the 
// remaining digits to the left.

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// 0555 - 0609
/*
  PROBLEM
    input is an integer and the number of digits you want to shift right
    output is the input integer with its digits shifted

  ALGORITHM
    split the input into two arrays, one that contains the digits that won't change, one that does
    iterate over the digits to change
      reassign to result of `rotateArray` to the rotating array
    end iteration
    return the joined arrays transformed into a number
*/

function rotateRightmostDigits(number, count) {
  const static = [...number.toString()].slice(0, -count);
  let dynamic = [...number.toString()].slice(-count);
  dynamic = rotateArray(dynamic);

  return Number(static.concat(dynamic).join(''));
}


/*
  PROBLEM
    input is a number and an integer representing the number of digits to rotate
    output is the input number with n digits rotated
    assume positive integer inputs 
    assume that we should return the original number if count is longer than the input number

  ALGORITHM
    if the count is 1 or 0, return the number
    if the number of digits in number > count, return the number
    turn the input number into a string
    slice off [n, end] of the string into an array, and reassign the string to the 'unchanged' part
    shift around the elements of the array 
    concat the string to the joined array
    return the number conversion of the string
*/

function rotateRightmostDigits1(number, count) {
  if (count <= 1) return number;
  if (number.toString().length < count) return number;

  let str = number.toString();
  const unchanged = str.slice(0, str.length - count);
  const toRotate = str.slice(str.length - count).split('');
  const rotated = rotateArray(toRotate);
  return Number(unchanged + rotated.join(''));
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length <= 1) return [...arr];

  const copy = [...arr];
  const firstElement = copy.shift();
  copy.push(firstElement);
  return copy;
}

// First solved in sixteen minutes.