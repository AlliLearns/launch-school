// What will this log to the console and why?

function myFunction() {
    let a = 1;

    if (true) {
        console.log(a);
    }
}

myFunction();

// It'll log '1' to the console.
// Block-scoped variables are visible to 
// other blocks defined within its own. 

// "Variables declared in an outer scope
// can be accessed in any inner scope."