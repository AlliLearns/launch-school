// Write a function that logs whether a number
// is between 0 and 50 (inclusive), between
// 51 and 100 (inclusive), greather than 100,
// or less than zero.

function logRange(num) {
    if (num < 0) {
        console.log(`${num} is less than 0`);
    } else if (num <= 50) {
        console.log(`${num} is between 0 and 50.`);
    } else if (num <= 100) {
        console.log(`${num} is between 51 and 100.`);
    } else if (num > 100) {
        console.log(`${num} is greater than 100.`);
    } else {
        console.log('Not a number.');
    }
}

const input = 50;
logRange(input);