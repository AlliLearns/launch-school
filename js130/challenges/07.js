/*  OCTAL
  Implement octal to decimal conversion. Given an octal input string,
  your program should produce a decimal output. Treat invalid input 
  as octal 0. 

  Decimal is a base-10 system. A number 233 in base-10 notation can 
  be understood as a linear combination of powers of 10. 

  Octal numbers are similar, but they use a base-8 system. A number 
  233 in base 8 can be understood as a linear combination of powers of 8.
*/

/*
  PROBLEM
    make a program that will convert a given octal number to its decimal equivalent
    to convert octal to decimal equivalent: 
      take the right-most digit and multiply that by 8 to the power of its location.
      (locations start at 0.)
      add that to the current sum
      strip the digit from the number (maybe)
    octal value is taken as a string in a class instance
    returned value is a number - the decimal equivalent    
    invalid octal numbers (strings whose contents are not the digits [0 - 7]) are turned into `0`.

  EXAMPLES AND TEST CASES
    class Octal
      constructor: takes a string that represents the octal value and saves it for later use
      toDecimal: method that takes no arguments and returns the class's octal value as its numeric decimal equivalent

  DATA STRUCTURES: strings, numbers, possibly an array 

  ALGORITHM
    constructor: store the given argument for later use

    toDecimal instance method
      grab the class's `octal` value and store in local variable `octal`.
      if the octal value contains any non-octal chars, return numeric 0.

      create variable `decimal` and init to 0
      iterate over `octal`
        grab the right-most value (and each iteration go one digit to the left), store in `digit`
        multiply `digit` by 8 ^ current iteration and add that value to `decimal`
      end iteration

      return `decimal`
    end toDecimal method
*/

class Octal {
  constructor(octal) { this.octal = octal }

  toDecimal() {
    const octal = this.octal;

    if (octal.match(/[^0-7]/g)) return 0;

    let decimal = 0;
    for (let i = 0; i < octal.length; i++) {
      const digit = octal[octal.length - i - 1];
      decimal += digit * (8 ** i);
    }

    return decimal;
  }
}

module.exports = Octal;