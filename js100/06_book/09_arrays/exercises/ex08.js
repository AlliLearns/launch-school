// This problem is more challenging than most in this book.
// Write a function similar to the `oddLengths` function
// from exercise 6, but don't use `map` or `filter`.
// Instead, try to use the `reduce` method. 

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(inputArr) {
    // get the lengths of all the string elements
    const lengths = inputArr.reduce((acc, element) => [...acc, element.length], []);
    
    
    // get the lengths of all the odd elements.
    return lengths.reduce(function(acc, element) {
        if (element % 2 === 1) {
            // acc = acc.concat(element);
            acc.push(element);
        }
        return acc;
    }, []);
}




// Push is returning the new length of the array.
// That's why this is undefined and causing an error 
// on the next call to push.
// const reducer = function(prevValue, currValue) {
//         prevValue.push(currValue.length);
// }


