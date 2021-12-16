// Log all odd numbers from `1` to `99` inclusive
// (to the console) with each number on a separate line.

/*
    PROBLEM
        no input
        output is printing to console
        print all odd numbers in the range [1, 99]

    ALGORITHM
        iterate from 1 to 99 inclusive
            if iterator is odd, print to console
        end iteration
*/

const MINIMUM = 1;
const MAXIMUM = 99;

for (let i = MINIMUM; i <= MAXIMUM; i++) {
    if (i % 2 === 1) console.log(i);
}