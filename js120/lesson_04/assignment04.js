// Practice Problem
function Greeting() {}
Greeting.prototype.greet = function(message) { console.log(message); };

function Hello() {}
Hello.prototype = Object.create(Greeting.prototype);
Hello.prototype.hi = function() { this.greet('Hello!'); };

function Goodbye() {}
Goodbye.prototype = Object.create(Greeting.prototype);
Goodbye.prototype.bye = function() { this.greet('Goodbye'); };

const hello = new Hello();
hello.hi();      // Logs 'Hello!'
// hello.bye();  // Throws a TypeError (hello.bye is not a function)
hello.greet();   // It'll log `undefined` since we didn't give `message` a value.
hello.greet('Goodbye'); //Logs 'Goodbye'
// Hello.hi();   // Throws a TypeError (Hello.hi is not a function)