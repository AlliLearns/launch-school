/* Anonymizer
  Using OLOO, create an `Account` prototype object that 
  anonymizes user objects on `init`. The created object
  should not have access to the function that anonymizes 
  a user other than through the `init` and `reanonymize`
  methods. The function that anonymizes creates a 16 
  character sequence composed of numbers and letters. 
  The following are properties and methods on the 
  `Account` object: 

  `init`: The init method sets the `email`, `password`, `firstName`, `lastName` and `displayName` of user. 
          The `displayName` is a 16 character sequence generated for the user. 
  `reanonymize`: This method generates a new 16 character sequence and reassigns it to the `displayName`
                 property if the password provided is valid. Returns `true` if successful, returns 
                 `'Invalid Password'` if the password provided is not valid. 
  `resetPassword`: This method asks the user for a new password and reassigns it to the `password` property.
                   To reset the current password, the user must provide the current password. Returns 
                   `'Invalid Password'` if the password provided is not valid. Returns `true` if the password
                   is successfully reset. 
  `firstName`: This method returns the first name of the user if the password provided is valid. 
               Returns `'Invalid Password'` if the password provided is not valid. 
  `lastName`:  This method returns the last name of the user if the password provided is valid. 
               Returns `'Invalid Password'` if the password provided is not valid. 
  `email`: This method returns the email name of the user if the password provided is valid. 
               Returns `'Invalid Password'` if the password provided is not valid. 
  `displayName`: This property returns the `displayName`, the 16 character sequence.

  Other than the above properties, methods and properties inherited from `Object.prototype`,
  no other method or property should exist on the object returned by the `Account`
  prototype object.
*/

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

const Account = {
  init(email, password, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.reanonymize(password);
    return this;
  },

  reanonymize(password) {
    if (this.password !== password) return 'Invalid Password';

    const arr = [];
    for (let i = 0; i < 16; i++) {
      arr[i];
    }
    
    this.displayName = arr.join('');
    return true;
  },
}
