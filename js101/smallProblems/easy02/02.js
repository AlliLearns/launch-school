// Write a program that will ask for user's name.
// The program will then greet the user.
// If the user writes "name!" then the 
// computer yells back to the user. 

/*
  INPUT   user input
  OUTPUT  string
  RULES   if user writes `name`, give one response. 
          if user writes `name!` give another response.
          assume only these two inputs.
  DATA    string primitives
  ALGORITHM 
    - declare a constant `readLine` which requires `readline-sync`

    - function prompt(question)
      - return readLine.question(`=> ${question}: `);

    - function checkExclamation(str)
      - return str.endsWith("!");

    - ask user for their name and put it in `userName` new variable.
    - if an exclamation is at the end of the string, print one message
    - if an exclamation is not at the end of the string, print another message
    - We'll have to remove the exclamation mark from the user response before or while printing the second message.
*/

const readLine = require('readline-sync');

function prompt(question) {
  return readLine.question(`=> ${question}: `);
}

function checkEndsWithExclamation(str) {
  return str.endsWith("!");
}

const userName = prompt("What is your name");

if (!checkEndsWithExclamation(userName)) {
  console.log(`Hello ${userName}.`);
} else if (checkEndsWithExclamation(userName)) {
  console.log(`HELLO ${userName.toUpperCase().replace("!", '')}. WHY ARE WE SCREAMING?`);
} else {
  console.log("Invalid input, something went wrong.");
}