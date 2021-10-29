// Given the following strings, you can you check
// whether they're equal irrespctive of whether
// the characters they contain are upper or lower case?

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function simpleStringCompare(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    return str1 === str2;
}

console.log(simpleStringCompare(string1, string2));
console.log(simpleStringCompare(string1, string3));