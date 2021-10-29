// Write a function that searches an array of strings
// for every element that matches the regular 
// expression given by its argument. 
// The function should return all matching 
// elements in an array. 

// Ex
let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(arr) {
    const matches = [];
    for (let value of arr) {
        if (value.match(/lab/)) {
            matches.push(value);
        }
    }

    return matches;
}