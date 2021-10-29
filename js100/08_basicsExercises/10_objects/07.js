// Write code that stores all of the `vehicle` property names
// in an array called `keys`

let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
};

const keys = [];
for (let prop in obj) {
    keys.push(prop);
}

// Or
// let keys = Object.keys(vehicle);