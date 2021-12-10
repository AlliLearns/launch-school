// Build a program that randomly generates Teddy's age,
// and logs it to the console. Have the age be a random
// number between `20` and `120` inclusive. 

/*
  PROBLEM
    No input and printing random age to output.
    We need to generate a random age between [20, 120]. 
    How to generate an inclusive random number?
  ALGORITHM
    const max = 120;
    const min = 20;
    `age` will be `Math.floor(Math.random() * max - min + 1) + min;
    log `age` to console with message `Teddy is ${age} years old!`.
*/

