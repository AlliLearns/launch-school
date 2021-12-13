// After Midnight (Part 02)
// As seen in the previous exercise, the time 
// of day can be represented as the number of 
// minutes before or after midnight. If the 
// number of minutes is positive, the time is after
// midnight. If the number of minutes is negative, 
// the time is before midnight. 

// Write two functions that each take a time of day
// in 24 hour format, and return the number of minutes
// before and after midnight, respectively. Both functions
// should return a value in the range [0, 1439]. You may
// not use JavaScript's Date class methods.


/*
PROBLEM
  input of a string representing time in a 24 hour format
  output of a number representing the number of minutes before or after midnight


ALGORITHM
  function afterMidnight(str) {
    split the input string on a colin into a new array
    multiply the first index by the number of minutes in an hour
    return the sum of the first and second indices
  }

    function beforeMidnight(str) {
    split the input string on a colin into a new array
    multiply the first index by the number of minutes in an hour
    sum the first and second indices 
    return the number of minutes in a day minus the sum
  }
*/
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY  = 24 * 60;

function afterMidnight(str) {
  const totalMinutes = getTotalMinutes(str);
  
  if (totalMinutes >= MINUTES_PER_DAY) return 0;
  return totalMinutes;
}

function beforeMidnight(str) {
  const totalMinutes = getTotalMinutes(str);
  
  if (totalMinutes <= 0) return totalMinutes;
  return MINUTES_PER_DAY - totalMinutes;
}

function getTotalMinutes(str) {
  let [hours, minutes] = str.split(':')
                            .map(elem => Number(elem));
  return (hours * MINUTES_PER_HOUR) + minutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);