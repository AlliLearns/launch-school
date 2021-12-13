// After Midnight (Part 01)
// The time of day can be represented as the 
// number of minutes before or after midnight. 
// If the number of minutes is positive, the time 
// is after midnight. If the number of minutes
// is negative, the time is before midnight.

// Write a function that takes a time using this
// minute-based format and returns the time of day 
// in 24 hour format (hh:mm). Your function should 
// work with any integer input. You may not use 
// JavaScript's Date class methods. Disregard 
// Daylight Savings and Standard Time and other 
// complications.


/*
  PROBLEM
    input is an integer that represents a number of minutes
    output is a string that represents the time of day in "hh:mm" format
    negative input values are minutes before midnight.
    positive input values are minutes after midnight.

  ALGORITHM
    divide the input number by 60
    separate the whole and digit parts
    mod the whole value by 24 to get the hour number

*/

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

function timeOfDay(minutesFromMidnight) {
  if (minutesFromMidnight === 0) return `00:00`;

  const hoursFromMidnight = minutesFromMidnight / MINUTES_PER_HOUR;

  const [hours, minutes] = getHoursAndMinutes(hoursFromMidnight);
  const hour = hours % HOURS_PER_DAY;

  return formatTime(hour, minutes);
}

function getHoursAndMinutes(hours) {
  const hour = Math.trunc(hours);
  const minutes = Math.round((hours % 1) * MINUTES_PER_HOUR);
  return [hour, minutes];
}

function formatTime(hour, minutes) {
  const isNegative = hour <= 0 && minutes <= 0;
  switch (isNegative) {
    case true:  return `${padZeros(HOURS_PER_DAY - 1 + hour)}:${padZeros(MINUTES_PER_HOUR + minutes)}`;
    case false: return `${padZeros(hour)}:${padZeros(minutes)}`;
    default:    return `invalid sign`;
  }
}

function padZeros(num) {
  return num.toString().padStart(2, '0');
}

// console.log(timeOfDay(0));
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231));

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");