// Write a function that determines the mean of the three scores
// passed to it and returns the letter associated with that grade.


/*
  INPUT   three integer numbers between 1 and 100
  OUTPUT  a string representing a grade
  RULES   assume the above input
  DATA    objects
  ALGORITHM
    - declare `gradeMap` as an object literal that maps a grade to its range
    
    - function getGrade(grade1, grade2, grade3)
      - declare `mean` and initialize it to `(grade1 + grade2 + grade3) / 3;

      - iterate over gradeMap
        - if `mean` is included in the current key's value, return key
      - end iteration

    - return "F"
*/

const gradeMap = {
  A: [90, 100],
  B: [80, 89],
  C: [70, 79],
  D: [60, 69],
}

function getGrade(grade1, grade2, grade3) {
  const mean = (grade1 + grade2 + grade3) / 3;

  for (let grade in gradeMap) {
    const lowerRange = gradeMap[grade][0];
    const upperRange = gradeMap[grade][1];
    if (mean >= lowerRange && mean <= upperRange) return grade;
  }

  return "F";
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"