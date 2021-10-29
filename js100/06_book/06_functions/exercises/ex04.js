// What does the following code log to the console?

function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
}

scream('Yipeee');

// This will output nothing.
// The function will have added the extra characters on to 
// the end of the given string, but we return without logging.
// Neither do we return the new value so it could be loged. 
