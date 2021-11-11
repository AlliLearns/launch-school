// What does the last line in the following code output?

let object = {first: [1]};
let numArray = object["first"];
numArray.push(2);

console.log(numArray);
console.log(object);

// -----------------------------------
// numArray will be: [1, 2]
// object will be: {first: [1, 2]}
// Yay, got it. 

// You can use slice to make a copy of an array
