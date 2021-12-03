// Log all even numbers from `1` to `99` inclusive
// to the console, with each number on a separate line. 

/*
    INPUT   integer numbers
    OUTPUT  printing
    RULES   print even numbers from 1 to 99 inclusive
    DATA    primitive numbers
    ALGORITHM
        - declare a `minimum` variable and initialize it to 1.
        - declare a `maximum` variable and initialize it to 99.
        - loop from `minimum` to `maximum` inclusive 
            - print every even number.
*/

const MINIMUM = 1;
const MAXIMUM = 99;

for (let i = MINIMUM; i <= MAXIMUM; i++) {
    if (i % 2 === 0) console.log(i);
}