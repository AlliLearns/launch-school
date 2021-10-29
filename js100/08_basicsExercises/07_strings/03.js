// Implement a function `repeat` that repeats an input
// string a given number of times. 

function repeat(iterations, message) {
    let finalMessage = '';
    for (let i = 0; i < iterations; i++) {
        finalMessage += message;
    }

    return finalMessage;
}

console.log(repeat(3, 'ha'));