// What will the following code log and why?

console.log(greeting);
let greeting = "Hello world!";

// It'll throw a ReferenceError.
// Variables decalred with `let` and `const` are not hoisted.
// So they are not accessable before they are decared.