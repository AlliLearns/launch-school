// Write a function that takes a string as an argument
// and returns an all-cap version of the string when 
// the string is longer than 10 characters.
// Otherwise, it should return the orginal string.

// // Retuns an all-caps version of the given 
// // string if str is longer than 10 chars. 
// // Assuming only string input. 
// // Returns original string elsewise.
// function shoutIfLong(str) {
//     if (str.length > 10) {
//         return str.toUpperCase();
//     } else {
//         return str;
//     }
// }


// Retuns an all-caps version of the given 
// string if str is longer than 10 chars. 
// Assuming only string input. 
// Returns original string elsewise.
function shoutIfLong(str) {
    return str.length > 10 ? str.toUpperCase() : str;
}

const input = 'this is a string'
console.log(shoutIfLong(input));