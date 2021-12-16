// Write a program that will ask for user's name.
// The program will then greet the user.
// If the user writes "name!" then the 
// computer yells back to the user. 

/*
  PROBLEM 
    input is user input
    output is either a printed greeting or a different greeting if the input was the string '<name>!'

  ALGORITHM
    prompt the user for their name.
    if it ends with an exclamation, print `HELLO <name>. WHY ARE WE SCREAMING?
    else print `Hello <name>.`
*/

const readLine = require('readline-sync');

function prompt(question) {
  return readLine.question(`=> ${question}: `);
}

const userName = prompt("What is your name");

function checkEndsWithExclamation(str) {
  return str.endsWith("!");
}

if (!checkEndsWithExclamation(userName)) {
  console.log(`Hello ${userName}.`);
} else if (checkEndsWithExclamation(userName)) {
  console.log(`HELLO ${userName.toUpperCase().replace("!", '')}. WHY ARE WE SCREAMING?`);
} else {
  console.log("Invalid input, something went wrong.");
}