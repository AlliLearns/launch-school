// What does this log to the console and why?

function myFunction() {
    let a = 1;

    if (true) {
        console.log(a);
        let a = 2;
        console.log(a);
    }
}

myFunction();

// This code will throw a reference error.
// JavaScript looks ahead and can see that it's 
// trying to access a variable called 'a' within 
// that scope that's not been declared yet, 
// despite a version of 'a' already existing in
// the outter scope. 

// "Varibles declared by `let` aren't available 
// until the code runs....Technically, JavaScript
// actually does hoist the variables declared by 
// `let` and `const`, but it creates a 'temporal 
// dead zone' in which the variable exists but has 
// no value - not even a value of `undefined`."

// "Note that the variable `a` defined on line 4
// is shadowed by the variable defined on line 6"