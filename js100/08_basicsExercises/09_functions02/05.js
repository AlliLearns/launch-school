// Implement a function `catAge` that takes a number
// of human years as input and convers them into cat years.
// Cat years are calculated as follows: 
// catYear = 15 + 9 + (humeYear - 2) * 4

// function catAge(humeAge) {
//     if (humeAge <= 0) {
//         return 0;
//     } else if (humeAge === 1) {
//         return 15; 
//     } else if (humeAge === 2) {
//         return 15 + 9;
//     } else {
//         return 15 + 9 + (humeAge - 2) * 4;
//     }
// }

function catAge(humeAge) {
    switch (humeAge) {
        case 0:     return 0;
        case 1:     return 15;
        case 2:     return 15 + 9;
        default:    return 15 + 9 + ((humeAge - 2) * 4);
    }
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));