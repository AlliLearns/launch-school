// Write a function that computes and returns the factorial
// of a number by using a `for` loop. 
// The factorial of a positive integer `n`, signified
// by `n!` is defined as the productof all integers
// between `1` and `n` inclusive. 
// You may assume that the argument is always a pos integer.


// Assuming that num is a positive integer
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

const input = 5;
console.log(factorial(input));