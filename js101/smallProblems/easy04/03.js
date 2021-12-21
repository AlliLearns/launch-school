// Build a program that logs when the user
// will retire and how many more years the 
// user has to work until retirement. 

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

/*
  PROBLEM
    Get the user's age and the age at which they want to retire.
    Print the year they will retire in the format of:
      `It's ${year}. You will retire in ${retireYear}.`
      `You only have ${yearsTillRetirement} of work to go!`
    Assume that the user will input an age between 1 and 110.
    Assume that the given age will be a numeric integer.

  DATA
    Date for getting the current year. 
    numeric integers otherwise.
    
  ALGORITHM
    Get user's age. 
    Get the age user would like to retire.
    Get the current year from the Date object. (LOOKUP)
    Calculate `retireYear` with `retireAge - age + year`
    Calculate `yearsUntilRetirement` with `retireAge - age`

    Print the message: 
    `It's ${year}. You will retire in ${retireYear}.`
    `You only have ${yearsUntilRetirement} of work to go!`
*/

const readLine = require('readline-sync');

function prompt(message) {
  return readLine.question(`=> ${message}: `);
}

const [age, retireAge] = getUserData();
const year = new Date().getFullYear();
const [retireYear, yearsUntilRetirement] = calculateRetireData(age, retireAge, year);
console.log(formatMessage(year, retireYear, yearsUntilRetirement))


function getUserData() {
  const age = prompt("What is your age");
  const retireAge = prompt("What age would you like to retire");

  return [age, retireAge];
}

function calculateRetireData(age, retireAge, year) {
  const retireYear = retireAge - age + year;
  const yearsUntilRetirement = retireAge - age;

  return [retireYear, yearsUntilRetirement];
}

function formatMessage(year, retireYear, yearsUntilRetirement) {
  return  `It's ${year}. You will retire in ${retireYear}.\n` +
          `You only have ${yearsUntilRetirement} of work to go!`
}