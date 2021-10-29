// Without using a `for`, `while` or `do/while` loop
// write some code that checks whether the 
// number 3 appers inside these arrays: 
// (return `true` or `false` depending on each result.)

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

const found = (inputArr) => inputArr.find(elm => elm === 3) ? true : false;
console.log(found(numbers1));
console.log(found(numbers2));
console.log(found(numbers3));


// function hasThree(inputArr) {
//     if (inputArr.find(3)) {
//         return true;
//     } else {
//         return false;
//     }
// }