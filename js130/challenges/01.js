/* Triangles
  Write a program to determine whether a triangle is equilateral, isosceles or scalene. 
  An equilateral triangle has all three sides teh same length.
  An isosceles triangle has exactly two sides of the same length.
  A scalene triangle has all sides of different lengths. 

  Note: For a shape to be called a triangle, all sides must be of length > 0. 
  The sum of the lengths of any two sides must be greater than the length of the third side. 
*/


/*
  PROBLEM
    write a program to determine whether a triangle is equilateral, isosceles or scalene.
    - equilateral: all three sides are the same length
    - isosceles:   exactly two sides of the same length
    - scalene:     all sides of different lengths
    Triangle sides must be of length > 0.
    Sum of the lengths of any two sides > third side.
    
    Notes: 
      - Triangle object
      - `kind` instance method will return type of triangle.
      - sides don't have to be integer lengths
      - Sides of negative lengths are illegal.
      - Sides of zero lengths are illegal. 
      - Attempts at creation of illegal triangles result in thrown errors.
  
  ALGORITHM
    Make a type to represent a `Triangle`
    `constructor` of `Triangle` will assign properties: side1, side2, side3
    `kind` method of `Triangle` will return whether the triangle 
            instance is 'equilateral', 'isosceles' or 'scalene'.
            
    `constructor` method of `Triangle`
      if any side is zero, throw.
      if any side is negative, throw.
      if the sum of two sides are <= remaining side, throw.
      
      takes `side1`, `side2` and `side3` parameters and assigns their values to properties on the new object.
    end `constructor`
    
    `kind` method of `Triangle`
      make a set out of the `sides` property and store in `sides`
      if `sides` length is `1`, return "equilateral"
      if `sides` length is `2`, return "isosceles"
      if `sides` length is `3`, return "scalene"
    end `kind`
*/

module.exports = Triangle;

function Triangle(side1, side2, side3) {
  const sides = [side1, side2, side3];
  const triangleError = new Error("Invalid Triangle");
  
  const hasZeros = sides.includes(0);
  const hasNegatives = sides.some(elem => Math.sign(elem) === -1 );
  
  if (hasZeros || hasNegatives) throw triangleError;
  
  
  const longLengths = sides.reduce((acc, elem, idx, arr) => {
    const third = elem;
    let sum = 0;
    
    switch (idx) {
      case 0: sum = arr[1] + arr[2]; break;
      case 1: sum = arr[0] + arr[2]; break;
      case 2: sum = arr[0] + arr[1]; break;
    }
    
    if (sum <= third) acc.push(idx);
    return acc;
  }, []);
  
  
  if (longLengths.length > 0) throw triangleError;
  
  this.sides = sides;
}



Triangle.prototype.kind = function kind() {
  switch (new Set(this.sides).size) {
    case 1: return "equilateral";
    case 2: return "isosceles";
    case 3: return "scalene";
    default: return "invalid triangle";
  }
}


// console.log(new Triangle(3, 4, 5));
// new Triangle(1, 1, 3);
// new Triangle(7, 3, 2);
// new Triangle(10, 1, 3);
// new Triangle(1, 1, 2);

// console.log(new Triangle(2, 2, 2).kind() === "equilateral");
// console.log(new Triangle(3, 4, 4).kind() === "isosceles");
// console.log(new Triangle(3, 4, 5).kind() === "scalene");