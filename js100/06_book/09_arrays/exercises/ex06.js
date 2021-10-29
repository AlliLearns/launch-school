// Use `map` and `filter` to first determine
// the lengths of all the elements in an 
// array of string values, then discard 
// the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(inputArr) {
    const lengths = inputArr.map((element) => element.length);
    return lengths.filter(num => num % 2 === 1);
}