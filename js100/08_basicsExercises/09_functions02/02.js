// Change the function `greet` from the previous 
// exercise so that it takes two arguments: 
// A greeting with 'Hello' as default value
// and a recipient with 'world' as default value.

function greet(greeting = "Hello", recipient = 'world') {
    console.log(`${greeting}, ${recipient}`);
}

greet();
greet('Salutations');
greet('Good morning', 'Launch School');