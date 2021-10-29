// Write a function, `evenOrOdd`, that determines whether its argument is an even number.
// If it is, the function should log `even` to the console.
// Otherwise, it shoud log `odd`.
// For now, assume that the argument is always an integer

// // Assumes integer values as input
// function evenOrOdd(num) {
//     if (num%2 === 0) {
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
// }


// Assumes integer values as input
function evenOrOdd(num) {
    num % 2 === 0 ? console.log('even') : console.log('odd');
}

const input = 3;
evenOrOdd(input);
