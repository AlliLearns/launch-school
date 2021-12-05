// Write a function that takes one argument, 
// a positive integer, and returns a string of 
// alternating `'1'`s and `'0'`s, always 
// starting with a `'1'`. The `length` of the 
// string should match the given integer. 

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

/*
  INPUT   integer number
  OUTPUT  string
  RULES   output a string of alternating 1s and 0s of the given length
  DATA    strings and numbers
  ALGORITHM
    - function stringy(num)
      - declare `result` and initialize it to empty string.
      - iterate from 0 to num exclusive
        - concat a 1 to `result` for every even index
        - concat a 0 `result` every odd index
      - end loop

      - print result
*/

function stringy(num) {
  let result = '';

  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) result = result.concat(1);
    if (i % 2 === 1) result = result.concat(0);
  }

  console.log(result);
}