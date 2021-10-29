// Create an array from the keys of the object `obj`
// below, with all of the keys converted to uppercase.
// Your implementation must not mutate `obj`.

let obj = {
    b: 2,
    a: 1,
    c: 3,
};

const cap = [];
for (let key in obj) {
    cap.push(key.toUpperCase())
}

console.log(cap);