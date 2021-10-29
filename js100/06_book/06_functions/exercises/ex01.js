// What does this code log to the console? 
// Does executing the `foo` function affect the output?
// Why or why not? 

let bar = 1;
function foo() {
    let bar = 2;
}

foo();
console.log(bar);

// This will output '1'
// Executing the 'foo' function does not affect output.
// The first `bar` is a global variable; 
// the second `bar` is declared within foo() and is local to that function.
