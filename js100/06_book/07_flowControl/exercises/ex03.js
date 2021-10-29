// Let's improve our previous implementation of `evenOrOdd`.
// Add a validation check to ensure that the argument is an integer.
// If it isn't the function should issue an error message and return.

// By 'issue an error message' they seem to mean 'tell the console'

function isEvenOrOdd(num) {
    if (!Number.isInteger(num)) {
        console.log("Not an integer argument.");
        return;
    }

    num%2 === 0 ? console.log('even') : console.log('odd');
}

const input = 3.5;
isEvenOrOdd(input);