// Write a function called `localGreet` that takes a 
// locale as input and returns a greeting. 

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

function localGreet(locale) {
    const language = extractLanguage(locale);
    const region = extractRegion(locale);
    // return greet2(language, region);

    // Their solution: 
    switch (region) {
        case 'US':  return "Hey!";
        case 'GB':  return "Hello!";
        case 'AU':  return "Howdy!";
        default:    return greet(language);
    }
}


function extractRegion(locale) {
    return locale.split('_')[1]
                 .split('.')[0];
}

// Their solution: 
function extractLanguage(locale) {
    return locale.split('_')[0];
}

function greet2(language, region) {
    switch (language) {
        case 'fr': return "Salut!";
        case 'pt': return "Ola!";
        case 'de': return "Hallo!";
        case 'sv': return "Hej!";
        case 'af': return "Haai!";
        case 'en': 
            switch (region) {
                case 'US': return "Hey!";
                case 'GB': return "Hello";
                case 'AU': return "Howdy!";
                default: return "Sorry, we don't recongize your region.";
            }
        default: return "Sorry, we don't recognize your language.";
    }
}


function greet(langCode) {
    switch (langCode) {
        // case 'en':  return "Hi!";
        case 'fr':  return "Salut!";
        case 'pt':  return "Ola!";
        case 'de':  return "Hallo!";
        case 'sv':  return "Hej!";
        case 'af':  return "Haai!";
        default:    return "Sorry, we don't know your language.";
    }
}