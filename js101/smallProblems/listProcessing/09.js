// Inventory Item Transactions
// Write a function that takes two arguments, 
// an inventory item ID and a list of transactions, 
// and returns an array containing only the transactions
// for the specified inventory item. 

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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/*
  PROBLEM
    input is an integer representing an item ID and an array of inventory objects 
    output is an array of inventory objects 
    output array contains only the items specified by the input ID
    assume that all transactions contain the same form

  ALGORITHM

*/

function transactionsFor(itemID, transactions) {
  return transactions.filter(obj => obj.id === itemID);
}

