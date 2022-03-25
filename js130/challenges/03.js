/*  ROMAN NUMERALS
  Write some code that converts modern decimal numbers to their Roman number equivalents. 

  The Romans were a clever bunch. They conquered most of Europe and rules it for hundreds of years.
  They invented concrete and straight roads and even bikinis. One thing they never discovered though
  was the number zero. This made writing and dating extensive histories of their exploits slightly
  more challenging, but the system of numbers they came up with is still in use today. For example,
  BBC uses Roman numerals to date their programmes. 

  The Romans wrote using letters - I, V, X, L, C, D, M. Notice that these letters have lots of straight
  lines are are hence easy to hack into stone tables. 

  There is no need to be able to convert numbers larger than about 3000. 

  Wikipedia says: Roman numerals...are written by expressing each digit separately starting with the 
  left most digit and skipping any digit with a value of zero. 
*/

/*
  PROBLEM
    convert decimal integers to roman number equivalents from [1 - 3000].

    Notes: 
      I: Singles from 1 to 3.
      V: Five
      X: Ten
      L: Fifty
      C: One-hundred
      D: Five-hundred
      M: One-thousand

      If you're above by between 1 and 3, use addition (postfix)
      If you're below by 1, use subtraction (prefix)

      [1 - 3]:       I, II, III
      [4 - 8]:       IV, V, VI, VII, VIII
      [9 - 14]:      IX, X, XI, XII, XIII, XIV
      [15 - 30]:     XV...XX...XXX
      [40 - 80]:     XL...L...LX...LXX...LXXX
      [90 - 130]:    XC...C...CX...CXX...CXXX
      [140 - 180]:   CXL...CL...CLX...CLXX...CLXXX
      [190 - 230]:   XCC...CC...CCX...CCXX...CCXXX
      [240 - 280]:   CCXL...CCL...CCLX...CCLXX...CCLXXX
      [400 - 800]:   CD...D...DC...DCC...DCCC
      [900 - 1300]:  CM...M...MC...MCC...MCCC
      [1400 - 1800]: CMD...MD...MDC...MDCC...MDCCC
      [1900 - 2300]: CMM...MM...MMC...MMCC...MMCCC

      [2, 3, 5, 8] = MMCCCLVIII

      1, 2, 3, 6, 7, 8 = post-fixed by I, II, III
      4, 9 = prefixed by I
      5, 10 = direct value

      if divisible by 1000; M repeated n times (up to 3)
      if divisible by 100; C repeated n times
      if divisible by 10; X repeated n times
      if divisible by 5; V repeated n times
      if divisible by 1; I repeated n times


  EXAMPLES AND TEST CASES
    `RomanNumeral` class
      - constructor: takes an integer to be saved for later use
      - toRoman: returns a string representing the decimal number.

  DATA STRUCTURES
    Not sure yet. Some sort of object or array.
    Will need to be able to split the digits of the given number.
    Objects to map the symbols?

  ALGORITHM
    constructor: assign `decimalNumber` to private variable
    toRoman: 
*/


class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanVersion = '';
    let toConvert = this.number;

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(toConvert/value);
      let remainder = toConvert % value;

      // console.log(`Value: ${value}`);
      // console.log(`Multiplier: ${multiplier}`);
      // console.log(`remainder: ${remainder}`);
      // console.log(``);

      if (multiplier > 0) {
        romanVersion += (numeral.repeat(multiplier));
      }

      toConvert = remainder;
    });

    return romanVersion;
  }
}

// let number = new RomanNumeral(6);
// number.toRoman();

module.exports = RomanNumeral;


class Roman {
  static SYMBOLS = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }
}