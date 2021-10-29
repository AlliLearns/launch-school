// Write a function that takes a language code 
// and returns a greeting in that language. 

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'
console.log(greet('do')); // 

function greet(langCode) {
    switch (langCode) {
        case 'en':
            return "Hi!";
        case 'fr':
            return "Salut!";
        case 'pt':
            return "Ola!";
        case 'de':
            return "Hallo!";
        case 'sv':
            return "Hej!";
        case 'af':
            return "Haai!";
        default:
            return "Sorry, we don't know that language.";
    }
}