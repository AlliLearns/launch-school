// Write a function that determines the mean of the three scores
// passed to it and returns the letter associated with that grade.


/*
  PROBLEM
    input is three numbers that represent a score
    output is a character that represents the grade of the mean of the input
    assume all numerical inputs will be in the range [1, 100]

  ALGORITHM
    make a map of letter grades to grade ranges
    function getGrade(grade1, grade2, grade3) {
      calculate the mean from the sum of the inputs divided by 3
      iterate over the gradeMap object and return the mean if it's in a found range
      return 'F' if the mean isn't at least 60
    }
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