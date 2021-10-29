// Write a function that extracts the language code from a locale.
// A locale is a combination of a langauge code, a region, 
// and usually also a character set.

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

// function extractLanguage(lang) {
//     switch (lang) {
//         case 'en_US.UTF-8': return 'en';
//         case 'en_GB.UTF-8': return 'en';
//         case 'ko_KR.UTF-16': return 'ko';
//         default: return "Sorry, we don't know that code.";
//     }
// }

// Their solution: 
function extractLanguage(locale) {
    return locale.split('_')[0];
}