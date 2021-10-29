// What happens when you run the following program?
// Why do we get that result?

{
    let foo = 'bar';
}

console.log(foo);

// It'll throw a reference error.
// Global scope can't access the variable declared in that block scope. 