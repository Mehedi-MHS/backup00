function Person(first,last,age){
  this.name={
    first:first,
    last:last
  };
  this.age=age;
}
let person1=new Person("John","doe",75);
//Modifying prototype. Adding  "sayhi" method
Person.prototype.sayhi=function(){
  console.log(`Hi iam ${this.name.first} ${this.name.last}`);
};
// now sayhi method will be available for all the instances of Person() constructor
person1.sayhi(); //Hi iam John doe

let person2=new Person("leet","code",71);
person2.sayhi(); //Hi iam leet code

//Modifying prototype again. Now adding "fullname" property
//It doesnot work.because 'this' will be referencing the global scope in this case, not the function scope. Calling this property would return undefined. This worked fine on the method we defined earlier in the prototype because it is sitting inside a function scope, which will be transferred successfully to the object instance scope.
Person.prototype.fullname=this.name.first+" "+this.name.last;

console.log(person1.fullname); //undefined undefined
//By Modifying a prototype,you can only add methods(not properties)

Person.prototype.fullname2="Abul abul";
console.log(person1.fullname2);//Abul abul
//only static properties will work ↑


