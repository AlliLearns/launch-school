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

function printOddsLoop() {
    const MINIMUM = 1;
    const MAXIMUM = 99;

    for (let i = MINIMUM; i <= MAXIMUM; i++) {
        if (i % 2 === 1) console.log(i);
    }
}

/*
    ALTERNATE ALGORITHM - recursion
      function printOdds(n = 1)
        return if n is equal to or greater than 99
        log the value of n
        return a call tp printOdds with n + 2 as an argument
*/

function printOdds(n = 1) {
    if (n > 99) return;
    console.log(n);
    return printOdds(n + 2);
}

printOdds();