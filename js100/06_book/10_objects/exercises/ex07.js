// Add a `qux` property to the value `3` to the 
// `myObj` object we created in the previous exercise.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Now examine the following code snippits: 
// Without running this code, can you determine
// whether thee two snippets produce the same
// output? Why? 

// Snippet 1
let objKeys = Object.keys(myObj);
console.log(objKeys);
// objKeys.forEach(function(key) {
//   console.log(key);
// });


// Snippet 2
for (let key in myObj) {
    console.log(key);
}


// No. Keys returns the keys on that object and not it's prototype. 
// iteration will cover all keys, including hte prototype. 