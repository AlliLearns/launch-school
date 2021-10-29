// Run the snippet below and explain why `It's true!` is never output

let obj = {
    num: 42,
    'property name': 'string value',
    true: false,
    fun: function() {
      console.log('Harr Harr!');
    },
};
  
for (let prop in obj) {
    if (prop === true) {
      console.log("It's true!");
    }
}

// for..in runs over object keys. 
// Object keys are translated into strings.
// A deep equal between 'true' and true will never match.