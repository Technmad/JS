// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  console.log(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();

// special internal property for classes
// [[IsClassConstructor]]: true

User(); // Error: Class constructor User cannot be invoked without 'new'

console.log(User);
// class User { ... }

//Class methods are non-enumerable
//Classes always use strict
