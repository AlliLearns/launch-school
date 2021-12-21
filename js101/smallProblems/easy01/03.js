// Log all even numbers from `1` to `99` inclusive
// to the console, with each number on a separate line. 

/*
    PROBLEM
        no input
        output is printing to console
        print all even numbers in range [1, 99].

    ALGORITHM
        iterate from 1 to 99 inclusive
            if iterator is even, log it to console
        end iteration
*/

function printEvensLoop() {
    const MINIMUM = 1;
    const MAXIMUM = 99;
    
    for (let i = MINIMUM; i <= MAXIMUM; i++) {
        if (i % 2 === 0) console.log(i);
    }
}


function printEvens(n = 2) {
    if (n > 99) return
    console.log(n);
    return printEvens(n + 2);
}