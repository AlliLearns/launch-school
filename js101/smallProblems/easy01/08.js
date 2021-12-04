// In the modern era under the Gregorian Calendar, 
// leap years occur in every year that is evenly
// divisible by 4, unless the year is also 
// divisible by 100. If the year is evenly 
// divisible by 100, then it is not a leap year, 
// unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than
// year 0. Write a function that takes any year greater
// than 0 as input and returns `true` if the year is a 
// leap year or `false` if it is not a leap year. 

/*
  INPUT   a number that represents a year
  OUTPUT  a boolean that represents whether the year is a leap year
  RULES   check if the given integer number counts as a leap year
          assume integer input larger than 0.
  DATA    primitive value
  ALGORITHM
    (I wasn't able to solve this one with PEDAC or speaking out loud.)
    (I had to put them into wordy variables to figure it out though.)
    - Tip: test for the least-common cases first, not the most common.
*/

function isLeapYear(year) {
  const divBy4   = year % 4 === 0;
  const divBy100 = year % 100 === 0;
  const divBy400 = year % 400 === 0;

  return divBy400 || (divBy4 && !divBy100);
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true