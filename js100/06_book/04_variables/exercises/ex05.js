// Take a look at this code.
// What does the program log to the console?
// Why? 

let foo = 'bar';
{
    let foo = 'qux';
}

console.log(foo);

// It'll print 'bar'.
// The variable declaration in the block works, 
// and it would override the global `foo` but
// it's not actually used in the block it was born. 