// Change your `isBlank` from the previous exercise 
// to return `true` if the string is empty or 
// only contains whitespace. 

function isBlank(str) {
    return !(str.trim());
}
    
    console.log(isBlank('mars')); // false
    console.log(isBlank('  '));   // true
    console.log(isBlank(''));     // true