// Given a string, return a new string that replaces 
// every occurrence of the word 'important' with 
// the word 'urgent'.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// ---------------------------------

betterAdvice = advice.replaceAll('important', 'urgent');
console.log(betterAdvice);