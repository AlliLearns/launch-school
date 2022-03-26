/*  PERFECT NUMBER
  The Greet mathematician Nicomachus devised a classification scheme for natural 
  numbers (1, 2, 3...), identifying each as belonging uniquely to the categories 
  of 'abundant', 'perfect', or 'deficient' based on comparison between the number
  and the sum of its positive divisors (the numbers that can be evenly divided into
  the target number with no remainder, excluding the number itself). For instance,
  the positive divisors of 15 are 1, 3 and 5. This sum is known as the Aliquot sum.

  - Perfect numbers have an Aliquot sum that is equal to the original number.
  - Abundant numbers have an Aliquot sum that is greater than the original number.
  - Deficient numbers have an Aliquot sum that is less than the original number.

  Examples:
    6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
    28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
    15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
    24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
    Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.

Write a program that can tell whether a number is perfect, abundant, or deficient.
*/

/*
  PROBLEM
    input is a number that should be checked for perfect, abundant or deficient classifications
    output is one of 'perfect', 'abundant' or 'deficient'.
    a 'perfect' number's sum of factors is equal to the number
    an 'abundant' number's sum of factors is greater than the number
    a 'deficient' number's sum of factors is less than the number
    prime numbers are always deficient. 

    negative inputs throw an error
    assume non-integer inputs should be truncated
    assume strings that can't be converted into numbers throw an error
    assume all other inputs throw an error


  EXAMPLES AND TEST CASES
    class/constructor PerfectNumber
    - static method `classify`: takes an integer as input and returns one of 'perfect', 'abundant' or 'deficient'.
    negative inputs throw

  DATA STRUCTURES: an array to hold a range of integers from [1 - number].

  ALGORITHM
    constructor PerfectNumber() // empty function

    static method `classify`(number)
      if `number` is negative, throw
      create `divisors` and init to empty array

      iterate over [1 - number]
        if current number has no remainder when number is divided by it, push onto `divisors`
      end iteration

      add `divisors` to a single `sum`

      if `sum` is equal to `number`, return 'perfect'
      if `sum` is greater than `number`, return 'abundant'
      if `sum` is less than `number`, return 'deficient'
    end static method `classify`
*/

function PerfectNumber() {}

PerfectNumber.classify = function(number) {
  if (number < 0) throw new Error('Number cannot be negative');

  const divisors = [];

  for (let i = 1; i < number; i++) {
    if (number % i === 0) divisors.push(i);
  }

  const sum = divisors.reduce((acc, sum) => acc + sum);

  if (sum === number) return 'perfect';
  if (sum > number)   return 'abundant';
  if (sum < number)   return 'deficient';
};

module.exports = PerfectNumber;