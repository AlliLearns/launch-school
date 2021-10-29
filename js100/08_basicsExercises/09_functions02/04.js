// Create a function that calculates a person's body mass index.
// It should take two parameters: someone's height and weight. 
// Return the result as a string rounded to two decimals.

// bmi = weightInKilograms / heightInMeters**2;

// Give height in cm and weight in kg. 
function calculateBMI(height, weight) {
    const adjHeight = height / 100;
    return weight / adjHeight ** 2;
}

const bmi = calculateBMI(180, 80);

console.log(bmi.toFixed(2));
