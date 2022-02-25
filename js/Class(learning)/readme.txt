<<<<<<<<JavaScript Class<<<<<<<<<<< beginer guide
									#######From W3school########
#Use the keyword class to create a class.
#Always add a method named constructor():
    |      eg:class Car {
    |   	  constructor(name, year) {
    |     		 this.name = name;
    |      		this.year = year;
    |    	  }
    |      }


#Note:A JavaScript class is not an object.
It is a template for JavaScript objects.

#When you have a class, you can use the class to create objects:

	Example:
	|	let myCar1 = new Car("Ford", 2014);
	|	let myCar2 = new Car("Audi", 2019);


#The Constructor Method
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.


#Class "Methods"
------------------
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.

#Create a Class method named "age", that returns the Car age:

Example:
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";




#Imp:Warning!!:Constructor parameters name and methods name must not same.eg:

class car{          ↓↓
  constructor(name,age){
    this.name=name;
    this.age=age;
  }↓↓
  age(){
    .........
  }
}
//The age() method will not work.


   								##########From Developer. Mozilla (MDN)##############
   								
#Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

#Hoisting:
An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:
   e.g:
 |	const p = new Rectangle(); // ReferenceError
 |	class Rectangle {}


#Can declare a class in 2 ways:(named,unnamed)

 |	// unnamed
 |	let Rectangle = class {
 |	constructor(height, width) {
 |  	 this.height = height;
 | 		 this.width = width;
 |	 }
 |	};
	console.log(Rectangle.name);
	// output: "Rectangle"

	// named
	let Rectangle = class Rectangle2 {
  		constructor(height, width) {
    	this.height = height;
   	 this.width = width;
  		}
	};
	console.log(Rectangle.name);
	// output: "Rectangle2"


#Getter
`````````
		class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100



---------
#Static methods and properties

The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

____________-_-_-_-_-_-_-_-_

#Binding "this" with prototype and static methods
When a static or prototype method is called without a value for this, such as by assigning the method to a variable and then calling it, the this value will be undefined inside the method. This behavior will be the same even if the "use strict" directive isn't present, because code within the class body's syntactic boundary is always executed in strict mode.
   -----
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // the Animal object
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined
   --------
If we rewrite the above using traditional function-based syntax in non–strict mode, then this method calls are automatically bound to the initial this value, which by default is the global object. In strict mode, autobinding will not happen; the value of this remains as passed.

   ----
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object (in non–strict mode)

let eat = Animal.eat;
eat(); // global object (in non-strict mode)
Instance properties

------------------ --------------------------

#Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Example:
Create a class named "Model" which will inherit the methods from the "Car" class:
   ---
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
mycar = new Model("Ford", "Mustang");
mycar.show();
 
 
 ---
 
 
 
 
 
 

#The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.





