// Cute Angles
// Write a function that takes a floating point number
// representing an angle between `0` and `360` degrees
// and returns a string representing that angle in
// degrees, minutes and seconds. You should use a degree symbol
// to represent degrees, a single quote to represent minutes
// and a double quote to represent seconds. There are 60
// minutes in a degree and 60 seconds in a minute.

// To print the degree symbol we need \u00B0


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

/*
  PROBLEM
    input is a floating point number
    output is printing a formatted version of that number
    The printed output takes the whole number part as an angle and 
    takes the decimal part as minutes/seconds

  ALGORITHM
    if input is integer, return formatted version
    separate the whole and the decimal parts (whole is trunc, dec is subtract whole)
    multiply the decimal by 60
    separate the new whole and decimal parts
    multiply the new decimal by 60
    return formatted version of these values


    function formatValues(deg, min, sec) {
      truncate decimal values
      pad zeros
      return formatted string
    }

    function separateFloat(num) {
      const whole = Math.trunc(num);
      const decimal = num - whole;
      return [whole, decimal];
    }
*/

function dms(num) {
  const MIN_IN_DEGREES = 60;
  const SEC_IN_MINUTES = 60;

  if (Number.isInteger(num)) return formatValues(num, 0, 0);

  const [degrees, decimal] = separateFloat(num);
  const minutes = decimal * MIN_IN_DEGREES;

  const [_, secDec] = separateFloat(minutes)
  const seconds = secDec * SEC_IN_MINUTES;

  return formatValues(degrees, minutes, seconds);
}

function separateFloat(num) {
  const whole   = Math.trunc(num);
  const decimal = num % 1;
  return [whole, decimal];
}

function formatValues(deg, min, sec) {
  const DEGREE_SYMBOL = `\u00B0`;

  min = padZeros(Math.trunc(min));
  sec = padZeros(Math.trunc(sec));
  return `${deg}${DEGREE_SYMBOL}${min}'${sec}"`;
}

function padZeros(num) {
  const numStr = String(num);
  return numStr.padStart(2, '0');
}