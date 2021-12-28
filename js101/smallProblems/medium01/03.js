// Rotation (Part 03)
// Take the number `735291` and rotate it by one digit
// to the left, getting `352917`. Next, keep the first 
// digit fixed in place and rotate the remaining digits 
// to get `329175`. Keep the first two digits fixed in
// place and rotate again to get `321759`. Keep the 
// first three digits fixed in place and rotate again 
// to get `321597`. Finally, keep the first four digits 
// fixed in place and rotate the final two digits to 
// get `321579`. The resulting number is called the 
// maximum rotation of the original number. 

// Write a function that takes an integer as an argument 
// and returns the maximum rotation of that integer. You 
// can (and probably should) use the `rotateRightmostDigits`
// function from the previous exercise. 

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

/*
  PROBLEM
    input is an integer
    output is the maximum rotation of that integer
    if the number is one digit, return the input
    if the rotated number has a leading zero, it gets dropped

  ALGORITHM
    split the number into its digits
    if the length of the array is 1, return the input

    iterate over the digits
      reassign the result of the input to the outcome of rotateRightMostDigits(number, iterator)
    end iteration
    return the joined array turned into a number
*/

function maxRotation(num) {
  const digits = [...num.toString()];
  if (digits.length <= 1) return num;

  for (let i = digits.length; i > 0; i--) {
    num = rotateRightmostDigits(num, i);
    console.log(num);
  }

  return num;
}

// Second solution found in six minutes


/*
  PROBLEM
    input is a number
    output is the maximum rotation of that number
    maximum rotation is complicated to explain in words
    maximum rotation is a series of rotations pushed down by fixed digits
    drop leading zeros from the result
    assume positive integer input values

  ALGORITHM
    turn the number into a string
    if the input number is one digit, return that number
    iterate over the string
      rotate the number starting from the current iteration
    end iteration
    return an explicitly type-coerced number version of the string
*/

function maxRotation1(num) {
  let str = num.toString();
  if (str.length <= 1) return num;

  for (let i = str.length; i > 0; i--) {
    str = rotateRightmostDigits(Number(str), i).toString();
  }

  return Number(str);
}

function rotateRightmostDigits(number, count) {
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

// First solved in thirteen minutes.