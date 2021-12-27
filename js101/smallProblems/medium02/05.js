// Next Featured Number Higher than a Given Value
// A featured number is an odd number that is a 
// multiple of `7`, with all of its digits occurring 
// exactly once each. For example `49` is a featured 
// number, but `98` is not (not odd), `97` is not
// (not a multiple of 7) and 133 is not (repeated digits).

// Write a function that takes an integer as an argument 
// and returns the next featured number greater than the 
// integer. Issue an error message if there is no next 
// featured number. 

// The largest possible featured number is `9876543201`.

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*
  PROBLEM
    input is an integer 
    output is an integer that represents the next highest 'featured number'
    issue an error message if there is no next highest featured number
    the highest featured number is 9876543201
    a featured number is:
      an odd number that is a multiple of seven
      has all of its digits occurring exactly once each

  ALGORITHM
    Check if the given number is a featured number and return the input number if so

    set a maximum at `9876543201`
    until the number is featured, keep finding the next multiple of 7

    function isFeatured(num) {
      return true if:
        the number is divisible by 7
        the number is odd
        the number contains unique digits
    }

    function hasUniqueDigits(num) {
      turn the num into an array of its digits
      sort the array
      iterate over the array
        if this digits is the same as the next, return false
      end iteration
      return true
    }

    function findNextMultiple(num) {
      get the floor of num / 7
      add 1 to the result
      multiply that by 7 and return it
    }
*/

function featured(num) {
  // if (isFeatured(num)) return num;
  num = findNextMultiple(num);

  const MAXIMUM = 9876543201;
  const message = `There is no possible number that fulfills those requirements.`
  while (!isFeatured(num)) {
    num = findNextMultiple(num);
    console.log(`num is now ${num}`);
    if (num === MAXIMUM) break;
    if (num > MAXIMUM) return message;
  }

  return num;
}

function isFeatured(num) {
  return num % 7 === 0 && num % 2 === 1 && hasUniqueDigits(num);
}

function hasUniqueDigits(num) {
  const digits = [...num.toString()];
  digits.sort((a, b) => a - b);
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] === digits[i + 1]) return false;
  }

  return true;
}

function findNextMultiple(num) {
  return (Math.floor(num / 7) + 1) * 7;
}