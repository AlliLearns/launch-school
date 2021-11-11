// What do you think the following code will output?

let nanArray = [NaN];
console.log(nanArray[0] === NaN);

// --------------------------------------
// false
// NaN can't be compared with either lose or strict equality.
// You need Object.is() or (I think?) one other method.




// Bonus
// How can you reliably test if a value is `NaN`?

// --------------------------------------
// Ahh, right. You can use `Number.isNaN()`.
// Forgot about that. I'll need to make 
// a reference sheet for `Number` and 
// its methods. 