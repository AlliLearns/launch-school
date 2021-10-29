// What does this code output to the console?

function isArrayEmpty(arr) {
    if (arr) {
        console.log('Not empty');
    } else {
        console.log('Empty');
    }
}

isArrayEmpty([]);

/*
Not empty

The array exists and evaluates to a truthy value.
*/