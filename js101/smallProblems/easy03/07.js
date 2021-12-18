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
  PROBLEM
    input is a number
    output is a number
    a double number is a number whose left-side digits are the same as its right-side digits
    a double number is not a number whose digits are reflections
    output is the input multiplied by two
    if the input is a double number, return it
    assume positive numbers

  ALGORITHM
    split the string in two
    if the first and second halves of the string are the same, return the input number
    otherwise return the input multiplied by two
*/

function twice(num) {
  const numStr = num.toString();
  const halfLength = numStr.length / 2;

  if (numStr.slice(0, halfLength) === numStr.slice(halfLength)) return num;
  return num * 2;
}