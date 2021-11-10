// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// ------------------------------

console.log(arr2);

//[{ first: 42 }, { second: "value2" }, 3, 4, 5]

// Slice copies element-by-element, 
// so the reference to arr1 is lost
// in arr2, but slice also copies 
// elements that are objects as 
// the object's reference. 
// Any change to the first array 
// index is going to reflect in 
// that object.
