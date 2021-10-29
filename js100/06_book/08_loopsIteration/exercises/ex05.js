// The following code uses a `randomNumberBetween` function
// to generate a number between the first and second arguments.
// It uses a `while` loop to try to generate a number greater
// than `2`. Refactor the code so that you don't need to call
// `randomNumberBetween` from two different locations, lines 
// 6 and 10. 
// Do not change the arguments you pass to `randomNumberBetween`.

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

// let tries = 0;
// let result = randomNumberBetween(1, 6);
// tries++;

// while (result <= 2) {
//     result = randomNumberBetween(1, 6);
//     tries++;
// }


do {
    result = randomNumberBetween(1, 6);
    tries++;
} while (result <= 2);

console.log(`It took ${tries} tries to get a number greater than 2.`);