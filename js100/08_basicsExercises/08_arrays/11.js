// We have made a grocery list and as we check
// items off, we'd like to remove them.
// Write code that removes the items from `grocery list` 
// one by one until it's empty. Log the elements you remove.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

const listLength = groceryList.length;
for (let i = 0; i < listLength; i++) {
    console.log(groceryList.shift());
}

console.log(groceryList); // []

// Their solution
/*
while (groceryList.length > 0) {
    console.log(gorceryList.shift());
}
*/