// What will this code log to the console and why?

let a = 5;
let b = false;

if (a > 4) {
    let b = true;
}

console.log(b);

// It will log 'false' because
// it tried to redeclare variable 
// b which will be local to the inner
// scope of the if statement. 