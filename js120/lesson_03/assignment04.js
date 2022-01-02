// Problem 01
// What are two disadvantages of working with factory functions?
// - You can't tell what 'type' it is 
// - It makes a lot of redundant code by making copies of state and behavior. 

// ---------------------------------------------------------------------------

// Problem 02
// Rewrite the following code to use object-literal syntax to generate the returned object: 

function makeObj1() {
  let obj = {};
  obj.propA = 10;
  obj.propB = 20;
  return obj;
}

function makeObj() {
  let obj = {
    propA: 10,
    propB: 20,
  };

  return obj;
}

// ---------------------------------------------------------------------------

// Problem 03
// In this problem and the remaining problems, we'll build a simple
// invoice processing program. to get you started, here's the code 
// to process a single invoice: 

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// To process multiple invoices, we need a factory method 
// that we can use to create invoices. The requirements for
// the factory function are as follows: 
// 1. It returns an invoice object with `phone` and `internet`
//    properties, and a `total` method.
// 2. The default value for the phone service is 3000 and the
//    internet service is 5500 (in cents).
// 3. The function takes an object argument whose attributes
//    override the default values.

// The function should work with the following code: 
function createInvoice1(services = {}) {
  const newInvoice = {
    phone:    services.phone    || 5500,
    internet: services.internet || 3000,
    total() { return this.phone + this.internet },
  };

  return newInvoice;
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice1());
invoices.push(createInvoice1({ internet: 6500 }));
invoices.push(createInvoice1({ phone: 2000 }));
invoices.push(createInvoice1({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

// ---------------------------------------------------------------------------

// Problem 04
// Now we can build a factory function to create payments.
// The function can take an object argument in one of 3 forms: 
// 1. Payment for one service (internet or phone)
// 2. Payment for both services.
// 3. Payment with just an amount property. 

// The function should return an object that has the amount paid for 
// each service and a `total` method that returns the payment total.
// If the `amount` property is not present in the argument, it should 
// return the sum of the phone and internet service charges; if the 
// `amount` property is present, return the value of that property.

// Your function should work with the following code: 
function createPayment(services = {}) {
  const newPayment = {
    phone:    services.phone || 0,
    internet: services.internet || 0,
    amount:   services.amount | 0,
    total() { return (this.phone + this.internet) || this.amount },
  };

   return newPayment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

// ---------------------------------------------------------------------------

// Problem 05
// Update the `createInvoice` function so that it can add payment(s) to invoices.
// Use the following code as a guideline: 

function createInvoice(services = {}) {
  const newInvoice = {
    phone:    services.phone    || 5500,
    internet: services.internet || 3000,
    payments: [],

    addPayment(newPayment) { this.payments.push(newPayment) },
    addPayments(newPayments) { this.payments.push(...newPayments) },
    
    totalInvoice()  { return this.phone + this.internet },
    totalPayments() { return this.payments.reduce((sum, pay) => sum + pay.total(), 0) },
    amountDue()     { return this.totalInvoice() - this.totalPayments() },
  };

  return newInvoice;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0