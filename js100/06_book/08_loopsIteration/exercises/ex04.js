// Does the following code produce an error?
// Why or why not?
// What output does this code send to the console?

for (let i = 0; i < 5;) {
    console.log(i += 1);
}

// No. All for loop arguments(? values?) are optional.
/*
1
2
3
4
5
// The loop stops because the loop variable 
// is being incremented in the loop body.
*/