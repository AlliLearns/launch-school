// Write a function that takes a year as input
// and returns the century. The return value should
// be a string that begins with the century number 
// and ends with `'st'`, `'nd'`, `'rd'` or `'th'` as 
// appropriate for that number. New centuries begin
// in years that end with `01`. So, the years 
// `1901 - 2000` comprise the 20th century. 

/*
  PROBLEM
    input is a number that represents a year
    output is a string that tells us what century this year is in
    century's are represented by the number followed by the appropriate suffix
    new centuries begin in years that end with '01'. [1901 - 2000] is the 20th century

  ALGORITHM
    get the number of the current century from the ceiling of the input year div by 100
    return the formatted century string

    function formatCentury(century) {
      if the century ends with a special exception, return `${century}th`

      grab the last digit of the century
      if the last digit is 1, return `${century}st`
      if the last digit is 2, return `${century}nd`
      if the last digit is 3, return `${century}rd`
      all other cases, return `${century}th`
    }

    function catchException(year) {
      isolate the last two digits of year
      if the last two digits are any one of 11, 12 or 13, return true
      else return false
    }
*/


function century(year) {
  const century = Math.ceil(year / 100);
  return formatCentury(century);
}

function formatCentury(century) {
  if (catchWithTh(century % 100)) return `${century}th`;

  const lastDigit = century % 10;
  switch (lastDigit) {
    case 1:  return `${century}st`;
    case 2:  return `${century}nd`;
    case 3:  return `${century}rd`;
    default: return `${century}th`;
  }
}

function catchWithTh(lastTwo) {
  const exceptions = [11, 12, 13];
  return exceptions.includes(lastTwo);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"