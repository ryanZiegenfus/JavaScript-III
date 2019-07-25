/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - When 'this' isnt used inside of an object, it binds to the window (which is the first object it sees in its scope)
* 2. implicit - This is when 'this' is used inside of an object literal. 'this' then binds to the object it's inside of.
* 3. New binding - This binds 'this' to the object returned by the constructor. In other words, when you use new to create a new object, 'this' binds to that new object.
* 4. explicit - This is when you call a constructer and specify what you want 'this' to bind to when it's called.
*
* write out a code example of each explanation above
*/

// Principle 1
function example1() {
    console.log(this);
}
// code example for Window Binding

// Principle 2
const example2 = {
    name: "Ryan",
    key: function() {console.log(this.name)}
}
example2.key();
// code example for Implicit Binding

// Principle 3
function universal_greeting(planet) {
    this.greeting = 'Hello';
    this.planet = planet;
    this.hello = function() {
        console.log(`${this.greeting} ${this.planet}`)
    }
}
const Ryan = new universal_greeting("Earth");
Ryan.hello();
// code example for New Binding

// Principle 4
function Inventory(store, car) {
    this.store = store;
    this.car = car;
}
  
function Output(store, car) {
    Inventory.call(this, store, car);
    this.sale = function () {
        console.log(`A ${this.car} was sold at ${this.store}`)
    };
    return this.sale();
}
  
Output("Tampa Location", "Mustang")
// code example for Explicit Binding