// Log all odd numbers from `1` to `99` inclusive
// (to the console) with each number on a separate line.

/*
    INPUT   integer numbers
    OUTPUT  printing
    RULES   log odd numbers from 1 to 99 inclusive
    DATA    primitive 
    ALGORITHM
        - declare a variable `maximum` and set it to 99.
        - declare a variable `minimum` and set it to 99.
        - create a for loop that starts at `minimum` and stops at `maximum`
            - print every odd number.
*/

const MINIMUM = 1;
const MAXIMUM = 99;

for (let i = MINIMUM; i <= MAXIMUM; i++) {
    if (i % 2 === 1) console.log(i);
}