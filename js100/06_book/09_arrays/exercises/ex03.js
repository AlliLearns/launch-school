// Let's make the problem a little harder.
// In this problem, we're again interested
// in even numbers, but this time the numbers
// are in nested arrays in a single outer array.

let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
];

myArray.forEach(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
});