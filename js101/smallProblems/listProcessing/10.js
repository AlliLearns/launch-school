// Inventory Item Availability
// Building on the previous exercise, write a function
// that returns `true` or `false` based on whether or not
// and inventory `item` is available. As before, the 
// function takes two arguments: an inventory `item` and 
// a list of `transactions`. The function should return 
// `true` only if the sum of the `quantity` values of the 
// `item`'s transactions is greater than zero. Notice that
// there is a `movement` property in each transaction object. 
// A `movement` value of `out` will decrease the `item`'s 
// `quantity`. You should use the `transactionsFor` function
// from the previous exercise. 

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

/*
  PROBLEM
    input is an item ID and an array of transaction objects
    output is a boolean representing whether the specified item is available.
    an item is available if the sum of `quantity`'s transactions > 0.

  ALGORITHM
    filter out the transactions for this item ID
    build an array of + or - quantity values based on 'in' or 'out'
    return whether the sum of the array is > 0.
*/

function isItemAvailable(itemID, transactions) {
  const thisItem = transactionsFor(itemID, transactions);
  const quantities = [];

  for (let i = 0; i < thisItem.length; i++) {
    if (thisItem[i].movement === 'in') quantities.push(thisItem[i].quantity);
    if (thisItem[i].movement === 'out') quantities.push(-thisItem[i].quantity);
  }

  return quantities.reduce((sum, num) => sum + num) > 0;
}

function transactionsFor(itemID, transactions) {
  return transactions.filter(obj => obj.id === itemID);
}