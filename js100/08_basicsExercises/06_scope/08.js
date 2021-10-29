// What will this log to the console and why?

let a = 1;

function myFunction(a) {
    console.log(a);
}

let b = 2;

myFunction(b);

// This will log `2` to the console.
// The passed in variable value will
// shadow whatever was declared before it
// regardless of the shadowed variable's name.