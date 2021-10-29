// What will this code log to the console and why?

const a = 1;

function myFunction() {
    a = 2;
}

myFunction(a);

// It'll throw a TypeError. It doesn't like
// that you tried to overwrite the value of a. 
// Also, passing a into the function does nothing.