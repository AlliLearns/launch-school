// Use arithmetic operators to determine the individual
// digits of a 4-digit number like 4936.
let num = 4936;
for (let i = 0; i < 4; i++) {
        let digit = num%10;
        num -= digit;
        num /= 10;
        console.log(digit);
}
// --------------------------------------------------------
// Modified exercise:
// Find a general solution to print each digit of a 
// given positive integer of any length. 
// --------------------------------------------------------
// Final pass for general solution
const initNum = 4936; //or user-defined
printDigits(stripInt(initNum));


function printDigits(digitsArr) {
    for (let i = 0; i < digitsArr.length; i++) {
        console.log(`Digit ${i+1} is ${digitsArr[i]}`);
    }
}

// Works for positive integers only...
function stripInt(num, arr=[]) {
    if (num <= 0) { return arr}
    
    const digit = num%10;
    arr.push(digit);
    return stripInt((num-digit)/10, arr);
}