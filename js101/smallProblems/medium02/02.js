// Triangle Sides
// A triangle is classified as follows: 
// Equilateral: All three sides are equal length.
// Isosceles: Two sides are equal length while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest
// sides must be greater than the length of the longest side, and 
// every side must have a length greater than `0`. If either of these
// conditions is not satisfied, the triangle is invalid. 

// Write a function that takes the lengths of the three sides of a 
// triangle as arguments and returns one of the following four 
// strings representing the triangle's classification: 

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

/*
  PROBLEM
    input is a set of three positive values
    output is a string representing a type of triangle
    condition for equilateral is: all three sides are equal length
    condition for isosceles: two sides are equal length while third is different


  ALGORITHM
    checking equilateral: all three are equal
    side1 === side2 && side2 === side3

    checking isosceles: two are equal and the third is different
    side1 === side2 || side2 === side3 || side1 === side3

    checking scalene: all three sides are different lengths
    side1 !== side2 && side2 !== side3 && side1 !== side3

    invalid: if any side is 0 or if sum of the two shorter sides have to be greater than the longest side
    invalid if side1 === 0 || side2 === 0 || side3 == 0
    shortest side is Math.min(side1, side2, side3)
    longest side is Math.max(side1, side2, side3)
    remaining side is perimeter - longest - shortest
    invalid if shortest + medium <= longest

    create an object that maps each type to the function that checks it 
    the object will hold booleans as values that indicate whether the type was correct 
    the triangle function will return the first truthy value it finds in that object
*/

function triangle(side1, side2, side3) {
  const isInvalid = (side1, side2, side3) => {
    if (side1 === 0 || side2 === 0 || side3 === 0) return true;
    const perimeter = side1 + side2 + side3;
    const shortest = Math.min(side1, side2, side3);
    const longest = Math.max(side1, side2, side3);
    const medium = perimeter - longest - shortest;
    return (shortest + medium) <= longest;
  }

  const isEquilateral = (side1, side2, side3) => {
    return side1 === side2 && side2 === side3;
  }

  const isIsosceles = (side1, side2, side3) => {
    return side1 === side2 || side2 === side3 || side1 === side3;
  }

  const isScalene = (side1, side2, side3) => {
    return side1 !== side2 && side2 !== side3 && side1 !== side3;
  }

  const types = {
    invalid:     isInvalid(side1, side2, side3),
    equilateral: isEquilateral(side1, side2, side3),
    isosceles:   isIsosceles(side1, side2, side3),
    scalene:     isScalene(side1, side2, side3),
  }

  for (let key in types) {
    if (types[key]) return key;
  }

  return `something went wrong.`;
}

/*
  ALTERNATIVE ALGORITHM
    (from a mixture of student solutions)
    sort the input sides from smallest to largest
    return 'invalid' if the shortest side is 0 
    return 'invalid' if the two shorter sides are longer or equal to the longest

    make the sorted array into a set (removing duplicate entries)
    if there is one entry left, return 'equilateral'
    if there are two entries left, return 'isosceles'
    if there are three entries left, return 'scalene'
    otherwise, there were too many distinct input values.

*/

// No initial time but longer than 20 minutes