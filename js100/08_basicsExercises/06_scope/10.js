// What will this log to the console and why?

const a = {
    firstName: 'John',
    lastName:  'Doe',
};

function myFunction() {
    a.firstName = 'Jane';
}

myFunction();
console.log(a);

// It'll log 'firstName: Jane' and 'lastName: Doe'
// Objects are acced through their reference, their memory address. 