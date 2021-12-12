// List of Digits
// Write a function that takes one argument, a 
// positive integer, and returns a list of the 
// digits in the number. 

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

/*
  PROBLEM
    positive integer
    array of all the digits in that integer

  ALGORITHM
    create new array `digits`
    while num > 0
      mod input `num` by `10` and push result onto `digits`
      divide `num` by `10` and subtract `digit`
    reverse `digits`
    return `digits`
*/

// function digitList(num) {
//   const digits = [];

//   while (num > 0) {
//     digits.push(num % 10);
//     num = Math.trunc(num / 10);
//   }
  
//   return digits.reverse();
// }

// function digitList(num) {
//   const numStr = num.toString();
//   const nums = numStr.split('').map(elem => Number(elem));
//   return nums;
// }

function digitList(num, digits = []) {
  if (num <= 0) return digits;

  digits.unshift(num % 10);
  return digitList(Math.trunc(num / 10), digits);
}