function Person(first,last,age){
  this.name={
    first:first,
    last:last
  };
  this.age=age;
  this.sayhi=function(){
    return console.log(`Hello im ${this.name.first} ${this.name.last}`);
  }
}

console.log(Person.prototype);
/*
Person
constructor:Person(first,last,age){...}
__proto__:Object
*/

let john=new Person("John","Doe",75);
console.log(john.prototype);
//undefined
console.log(Object.getPrototypeOf(john));
// Person{…}