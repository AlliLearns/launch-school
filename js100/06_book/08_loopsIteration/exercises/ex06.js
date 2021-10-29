// Reimplement the `factorial` function from exercise 2
// using recursion. Once again, you may assume that the 
// argument is always a positive integer.

function recFactorial(num, iteration = 0, result = 1) {
    iteration++;
    result *= iteration;
    
    if (iteration >= num) { return result }
    return recFactorial(num, iteration, result);

    // return iteration < num ? recFactorial(num, iteration, result) : result;

    // if (iteration < num) {
    //     return recFactorial(num, iteration, result);
    // } else {
    //     return result;
    // }
}

// Their solution; they went backwards.
// I like their solution better.
function factorial(number) {
    if (number === 1) { return 1; }
    return number * factorial(number - 1);
}

const input = 8;
console.log(recFactorial(input));
console.log(factorial(input));