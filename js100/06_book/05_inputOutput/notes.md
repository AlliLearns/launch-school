# Input/Output
- Computer programs can use a multitude of input sources, such as mice, keyboards, disks, the network and environmental sensors. 
- Similarly, a program can write output to multiple places, such as the screen, a lot or a network. 
- A computer can obtain input from another computer's output. 
- In this chapter, we'll discuss the most basic method that a program can use to interact with the outside world: reading keyboard input from the command line and displaying output. 

<hr>

# Command Line Output
- You've already seen one method for writing data: `console.log(...)`, 
- This built-in function takes any JavaScript value, regardless of type and logs it to the console. 
- There are other ways to send messages to the console in `node`, but `console.log(...)` works in both `node` and most browsers. 
- `console.log(...)` prints to a browser's console when run in a browser's environment. 
- (An example is Chrome's developer console.)

<hr>

# Command Line Input
- `node` has an API called `readline` that lets JavaScript programs read input from the command line. 
- However, this API isn't straightforward or simple: it requires an understanding of async programming and higher-order functions - which aren't looked at until Core.
- For now, we can use a simplified version called `readline-sync`.

<br>

- To use `readline-sync` with your program, we need to go over how to retrieve Nodejs packages from `npm`, (node package manager). 
- A file named `package.json` must exist in the same directory as your program. 
- Run `npm init -y` in your project's directory to get it to create one for you. 
- Once you have a `package.json` you can install npm packages to your project. 
- To install `readline-sync`, run: `npm install readline-sync`
- In the npm documentation you'll typically see an install line that looks like this: `npm install readline-sync --save`. 
- We ignore the save because npm used to need it to tell npm to install the package in a `node_modules` subdirectory of your current directory. However, this has become the default behavior and `--save` is no longer needed. You'll still see it around though, so it's important to know what it means. 
- The `node_modules` subdirectory allows any Node.js programs stored in the current directory to reach the installed package with a simple `require(...)` command. 

## Example: Greet the User By Name
``` js
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
```

``` js
let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number: \n'));
let number2 = Number(rlSync.question('Enter the second number: \n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);
```

<!-- Holy crackers; just jumping into the installation of node packages without any background? I was not expecting a crash course on this to be in the middle of getting user input from the command line at all. This is only the second time I've been exposed to this kind of content and if I'd never seen it before I'd have SO MANY QUESTIONS. The way it's presented is in a face-value, 'we need you to know how to include this because this book relies on user input, but the details aren't important yet' sort of way. -->

<!-- This is dissapointing. I thought they were having us install node as a way to introduce us to it properly before core. -->

<hr>

# Input in the Browser 
- Working with a browsers input controls requires a working knowledge of the DOM, which is outside the scope of this book. 
- However, you don't need to know about the DOM to get user inputs. 
- Create and HTML page through which to import your JS and make your file say: 
``` js
let name = prompt("What's your name?");
console.log(`Good Morning, ${name}`);
```

<hr>

# Summary 

<hr>

# Exercises

<hr>
