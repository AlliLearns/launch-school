// A double number is an even-length number
// whose left-side digits are exactly the same as 
// its right-side digits. For example, `44`, 
// `3333`, `103103` and `7676` are all double numbers, 
// whereas `444`, `334433` and `107` are not. 

// Write a function that returns the number 
// provided as an argument multiplied by two, 
// unless the argument is a double number. 
// Otherwise, return the double number as-is.

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

/*
  INPUT   integer number
  OUTPUT  integer number
  RULES   double the input if it's not a double number
          return the input if it is a double number
          assume that we'll only be getting integer numbers.
  DATA    numbers and strings
  ALGORITHM
    - function twice(num)
      - declare `numStr` and initialize it to `num.toString()`

      - declare `halfLength` = Math.floor(numStr.length/2)
      - if (numStr.slice(0, halfLength) === numStr.slice(halfLength)) return num
      return num * 2
*/

function twice(num) {
  const numStr = num.toString();
  const halfLength = numStr.length / 2;

  if (numStr.slice(0, halfLength) === numStr.slice(halfLength)) return num;
  return num * 2;
}