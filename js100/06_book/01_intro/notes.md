# Introduction
## A Brief JS History
- JavaScript, initially known as LiveScript, was created by Brendan Eich in 1995 for for the purpose of use with Netscape Communication's flagship web browser: Netscape Navigator.
- Other web browsers started adding JavaScript support because the idea of running programs in the browser was powerful, but for much of its history, JavaScript was regarded more as a necessary evil rather than a pleasure to work with due to performance and security problems. 
- Google helped change that in 2008 with the creation of Chrome V8, a JavaScript 'engine' (or runtime) that addressed JavaScript's pain-points and made it possible for developers to build sophisticated browser-based applications. 
- Not long after, Ryan Dahl released `Node.js`, a cross-platform (runtime) environment that allowed JavaScript to execute outside of web browsers, and this additional flexibility has made JavaScript one of the most widely-used programming languages in the world. 

<hr>

## JavaScript's Future
- JavaScript is now described in the ECMAScript specification, and has evolved so much through the years that it's nigh-unrecognizable from the initial language (which had been written by Eich in ten days).
- The JavaScript community is one of the most active communities in the world and the code-base of community-written tools, frameworks and libraries is enormous. 
- The JavaScript standard itself is always evolving, and JavaScript engines implement support for those changes almost as rapidly. 
- JavaScript isn't slowing down any time soon. 

<hr>

## Abstraction
- Abstraction is the concept of removing users from the complexities of internal 'machinery', allowing them to control a given system with relative ease. 
- As an example, let's use phones: 
    - Users care about interacting with the manufacture's interface to access the phone's basic features. Users don't require knowledge of how hardware, signals and software work together to make this happen. 
    - A mobile developer will need to know a lower-level: how the software subsystems interoperate with the Operating System, using their development tools as an intermediary. They'll also need to know something about the manufacture's interface so that they can create an experience that the user expects. They don't need to know about how the battery provides electricity so 1s and 0s, the signals, can reach where they need to. 
    - A phone techninition will need to know the phone on another level that's beneath the manufacture's interface: the level at which hardwre components connect and work together so electrical signals can be routed to the right place when the phone's on. They don't need to know about the manufacture's interface nor the software that will implement it. But they might need to know a bit about the manufacture's vendoring sources so they can get the right parts for the right phone, or else understand the market of phone hardwre well enough to source a sutible alternative.
- Programmers need to operate at a level of abstraction that's beneath the user's interface - they neeed to use a programming language like JavaScript. 
    - JavaScript code gets translated down through various levels of abstraction until it can be understood by the machine that it's running on. 
    - The first level of translation is made by a JavaScript runtime environment (sometimes called an engine - like V8 from Chrome or Node.js mentioned earlier).  
- There are also levels of abstraction that exist between the programming language and the user-interface: tools and frameworks and libraries that package common code patterns and serve them up on easy-to-use lines. The first level of abstraction that these will go through will translate them down into their language-equivalent. 
- As a beginner, it's vital for you to understand how JavaScript (as a programming langauge) and the trendy tools and frameworks that are around are two different levels of abstraction. It's possible to learn how to use some of these without needing to know the JavaScript that it'll be translated to underneath - but approaching it this way is equivalent to the phone technition that has to guess at compatable parts rather than understanding what the manufacturing plant uses - it's a lot less effective in the repair of phones, and a lot less effective in the process of building programs. 
- Understanding lower levels of abstraction will help you make better use of tools with higher abstraction levels. 
- This book teaches you JavaScript so that you can recognize and use higher level abstractions with more granularity. 
<!-- - Abstraction can be visualized with the process of replacing a complicated mechanism that you don't need to understand with a box that only shows the system's inputs and outputs.  -->
<!-- I want to replace this section with images...It's hard to explain tree traversial in words. -->
<!-- Explaining the concept of abstraction and how it practically relates to programming has always been a challenge for me. My first exposure to abstraction wasn't presented well and it took me a really long time to recover from that. -->
<!-- I want to completly re-write this mess of a section... -->

<hr>

## Who This Book is For
- This book is for inexperienced or brand-new programmers. 
- It's goal is to provide a strong foundation in the general act of programming, using JavaScript as a vehicle. 
- It wants to instill muscle memory and a level of unconcious application that you don't get if you just read and don't go through practice problems - so do the exercises.
- A shift in thinking must take place for most people, which will come with practice. 
- Programmers generally need a temperment of pacience, persistence, focus, logic and detail-oriented thinking. Practice will help train your mind to think this way naturally. 

<hr>

## What's not Covered
- The DOM API
- Asynchronous Programming
- Object-Oriented JavaScript
- Testing
- Frameworks and Libaries

<hr>

## How to Read this Book
- Simply reading without doing the exercises will give you an intelectual understanding but it won't make you a programmer. 
- A level of muscle memory is necessary before you mind will automatically and quickly place down the right syntax and keystrokes without you having to look it up.
- A level of practice is necessary before you mind will be able to properly and automatically break a problem down into structured peices that can be implemented in code. 
- If someone asks you to solve a problem with a computer program but you haven't practiced, you won't be able to do it.

<hr>
