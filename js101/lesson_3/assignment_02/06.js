// Suppose we build an array like this

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array
// that looks like this: 
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]]

// Nesting data structures like we do here
// is commonplace in JavaScript and programming
// in general. We'll explore this in greater depth
// in later lessons.

// Create a new array that contains all of the 
// values but without the nested format. 

// ------------------------------


console.log([].concat(...flintstones));
// Their solution
console.log(flintstones.flat());