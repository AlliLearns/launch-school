// What will this log to the console and why?

if (true) {
    let myValue = 20;
}

console.log(myValue);

// It will throw a ReferenceError.
// The variable was defined within the 
// if block and will not be visible to 
// the program outside of that block.