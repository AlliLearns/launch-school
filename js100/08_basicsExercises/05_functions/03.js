// Implement a function `cite` that takes two string
// arguments: the author of the quote and what they said. 
// Log the quote to the console. 

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

function cite(author, quote) {
    console.log(`${author} said: "${quote}"`);
}