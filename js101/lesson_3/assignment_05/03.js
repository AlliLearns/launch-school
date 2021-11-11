// Alan wrote the following function, which 
// was intended to return all of the factors
// of `number`: 

function factors(number) {
  let divisor = number;
  let factors = [];

  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }

    divisor -= -1
  } while (divisor !== 0)

  return factors;
}

// Alyssa noticed that this code would fail when 
// the input is `0` or a negative number, and 
// asked Alan to change the loop. How can he make
// this work without using a `do/while loop`? 
// Note that we don't want to find the factors 
// for 0 or for negative numbers, we just want 
// to handle it gracefully or without going 
// into an infinite loop.

// ----------------------------------------

function revisedFactors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }

    divisor -= 1;
  }

  return factors;
}

console.log(revisedFactors(100));
console.log(revisedFactors(50));
console.log(revisedFactors(25));
console.log(revisedFactors(10));
console.log(revisedFactors(5));
console.log(revisedFactors(0));
console.log(revisedFactors(-5));


// Bonus: What is the purpose of number % divisor === 0 
// in that code? 

// It's checking for an evenly-divisible number. 
// (is that the math term?)


// Their answer: 
// It determines whether the result of the division
// is an integer. 

// They also had us change `number / divisor` to just 
// `divisor` to see the result - and it reversed the 
// resulting array. Interesting. 