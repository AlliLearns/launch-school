// The British Empire adopted the Gregorian Calendar in 1752,
// which was a leap year. Prior to 1752, they used the Julian 
// Calendar. Under the Julian Calendar, leap years occur in 
// any year that is divisible by 4. Using this information, 
// update the function from the previous exercise to determine
// leap years both before and after 1752.

/*
  PROBLEM
    input is an integer representing a year
    output is a boolean saying whether it's a leap year
    a Julian leap year is one that is divisible by 4
    a Gregorian leap year was determined in the last exercise 
    Gregorian started in 1752

  ALGORITHM
    if the year is before 1752, return Julian leap year
    otherwise return Gregorian leap year, from last exercise

    julian leap year is `year % 4 === 0`
*/

function isLeapYear(year) {
  if (year < 1752) return isJulianLeapYear(year);
  return isGregorianLeapYear(year);
}

function isGregorianLeapYear(year) {
  const divBy4   = year % 4 === 0;
  const divBy100 = year % 100 === 0;
  const divBy400 = year % 400 === 0;

  return divBy400 || (divBy4 && !divBy100);
}

function isJulianLeapYear(year) {
  return year % 4 === 0;
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
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true