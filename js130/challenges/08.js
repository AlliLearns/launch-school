/* SUM OF MULTIPLES
  Write a program that, given a natural number and a set of one or more numbers,
  can find the sum of all the multiples of the numbers in the set that are less 
  than the first number. If the set of numbers is not given, use a default set
  of 3 and 5.

  For instance, if we list all the natural number up to, but not including, 20
  that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15 and 18. 
  The sum of these multiples is 78.
*/

/*
  PROBLEM
    sum the multiples of a given list of numbers up to the first number given.
    if no numbers are given beyond the first, use 3 and 5. 

  EXAMPLES AND TEST CASES
    class SumOfMultiples
      constructor: takes the list of numbers whose multiples should be found
      instance method `to`: takes the number that the multiples should be found to / returns the sum
      static method `to`: takes the number that multiples should be found to / returns the sum

  DATA STRUCTURES: array for saving multiples

  ALGORITHM
    constructor(multiples = [3, 5])
      saves `multiples` for later use
    end constructor

    instance `to`(num)
      create `multiples` and init to `multiples` instance property
      create `arr` and init to empty array

      iterate up to but not including `num`
        if iterator evenly divides into any value of `multiples`, push iterator onto `arr`
      end iteration

      return the summation of the values in `arr`
    end `to`
    
    static `to`(num)
      
    end `to`
*/

class SumOfMultiples {
  constructor(...multiples) { 
    if (multiples.length === 0) multiples = [3, 5];
    this.multiples = [...multiples];
  }

  to(num) {
    const multiples = [...this.multiples];
    const arr = [];

    for (let i = 2; i < num; i++) {
      multiples.forEach(elem => {
        if (i % elem === 0 && !arr.includes(i)) arr.push(i);
      });
    }

    return arr.reduce((acc, elem) => acc + elem, 0);
  }

  static to(num) {
    return new SumOfMultiples().to(num);
  }
}

module.exports = SumOfMultiples;

