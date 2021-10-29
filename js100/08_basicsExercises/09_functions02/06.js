// Create a function `removeLastchar` that takes a string
// as an argument and returns the string without the 
// last character.

// function removeLastchar(str) {
//     const arr = str.split('');
//     arr.pop();
//     return arr.join('');
// }

// Their solution
function removeLastchar(str) {
    return str.substring(0, str.length - 1);
}

console.log(removeLastchar('caio!'));
console.log(removeLastchar('hello'));
