####1###
===Constructor====
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
====Creating Instance of Person Constructor====
let person1 = new Person('Bob');
let person2 = new Person('Sarah');
=====After the new objects have been created, the person1 and person2 variables contain the following objects:
{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

{
  name: 'Sarah',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
🔶Note that when we are calling our constructor function, we are defining greeting() every time, which isn't ideal. To avoid this, we can define functions on the prototype instead, which we will look at later.

####02#### Object.create method
some people prefer to create object instances without first creating constructors, especially if they are creating only a few instances of an object. JavaScript has a built-in method called create() that allows you to do that. With it, you can create a new object, using an existing object as the prototype of the newly created object.

With your finished exercise from the previous sections loaded in the browser, try this in your JavaScript console:
let person2 = Object.create(person1);

Now try these:

person2.name;
person2.greeting();

You'll see that person2 has been created based on person1 as its prototype —it has the same properties and method available to it.

One limitation of create() is that IE8 does not support it. So constructors may be more effective if you want to support older browsers.

##### __proto__ method is deprecated. Use Object.getPrototypeOf(obj) instead.

### prototype vs getPrototypeOf() ###
The constructor function Foobar() has its own prototype, which can be found by calling Object.getPrototypeOf(Foobar). However this differs from its prototype property, Foobar.prototype, which is the blueprint for instances of this constructor function.
If we were to create a new instance — let fooInstance = new Foobar() — fooInstance would take its prototype from its constructor function's prototype property. Thus Object.getPrototypeOf(fooInstance) === Foobar.prototype

#### NOTE:####
The 'prototype' property's value is an object, which is basically a bucket for storing properties and methods that we want to be inherited by objects further down the prototype chain.
The prototype property outputs an object containing all the mathods and properties of an object constructor. eg: console.log(Object.prototype) will output all the 
properties and methods of Object constructor.

###Note:##$
The value of 'constructor.name' can change (due to prototypical inheritance, binding, preprocessors, transpilers, etc.). Therefore, for more complex examples, you'll want to use the 'instanceof' operator instead.







