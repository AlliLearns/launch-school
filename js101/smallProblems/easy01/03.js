// Log all even numbers from `1` to `99` inclusive
// to the console, with each number on a separate line. 

for (let i = 1; i < 100; i += 2) {
    if (i === 99) break;
    console.log(i + 1);
}

// Their solution
// for (let number = 1; number < 100; number += 1) {
//     if (number % 2 === 1) {
//         continue;
//     }
//
//     console.log(number);
// }