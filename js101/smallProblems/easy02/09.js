// The `parseInt()` method converts a string of 
// numeric characters (including an optional plus
// or minus sign) to an integer. The method takes 
// two arguments where the first argument is the 
// string we want to convert and the second argument
// should always be 10 for our purposes. `parseInt()`
// and the `Number()` method behave similarly. In this
// exercise, you will create a function that does the 
// same thing. 


// Write a function that takes a string of digits and returns
// the appropriate number as an integer. You may not use any
// of the methods mentioned above. For now, do not worry about 
// leading `+` or `-` signs, nor should you worry about invalid
// characters; assume all characters will be numeric. 

// You may not use any of the standard conversion methods
// available in JavaScript, such as `String()` and `Number()`.
// Your function should do this the old-fashioned way and 
// calculate the result by analyzing the characters in the string.

/*
  INPUT   string of digits
  OUTPUT  number made of those digits
  RULES   create a number from a string. 
          Don't worry about base.
          Don't worry about non-numeric characters
          Don't use `String()` or `Number()` or `parseInt()`
  DATA    arrays
  ALGORITHM
  (build numbers with power series)
    - function stringToInteger(str)
      - split the string to an array. 
      - (the length of the array is the largest multiple of 10...)
      - declare `num` and init to `0`.
      - iterate over array.
        - add '10 ** (arr.length - index - 1) to `num`
      return `num`
*/

function stringToInteger(str) {
  const digits = str.split('');
  let num = 0;

  for (let i = 0; i < digits.length; i++) {
    num += digits[i] * (10 ** (digits.length - i - 1));
  }

  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true