// Will this program produce an error when run? 
// Why or why not? 

const FOO = 'bar';
{
    const FOO = 'qux';
}

console.log(FOO);

// It won't produce an error. 
// The `FOO` in the block would override the global declaration
// and be used for that block scope only. But it's not used. 