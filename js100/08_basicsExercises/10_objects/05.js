// What is the difference between the output of the two code snippets below.

// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?


// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?

// Snippet 1: Will have 'prefix': 'Pacific'
// Snippet 2: Will have 'Indian': 'Pacific'