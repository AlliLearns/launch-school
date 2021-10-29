// Convert the `person` object into a nested array
// called `nestedPerson`, containing the same
// key-value pairs.

let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

const nestedPerson = Object.entries(person);
console.log(nestedPerson);