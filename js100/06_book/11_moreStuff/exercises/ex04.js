// Given a list of numbers, write some code to 
// find and display the largest numeric value 
// in the list.

const numbers = [-1, -6, -3, -2];

function largest(arr) {
    if (arr.length === 0) {
        console.log("Need an array with at least one value.");
        return;
    }

    let large = -Infinity;
    for (let value of arr) {
        if (value > large) {
            large = value
        }
    }

    return large;
}

console.log(largest(numbers));