// What does the following function do? 

function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length);
}

// Takes a string and puts its words in an array.
// Reverses the array.
// Returns a new array with the lengths of each word. 