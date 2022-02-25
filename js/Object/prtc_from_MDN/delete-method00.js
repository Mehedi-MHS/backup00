function Person(first,last,age){
  this.first=first;
  this.last=last;
  this.age=age;
}
let person1=new Person("John","doe",75);
//Modifying prototype
Person.prototype.sayhi=function(){
  console.log(`Hi iam ${this.first} ${this.last}`);
};
// now sayhi method will be available for all the instances of Person() constructor
person1.sayhi(); //Hi iam John doe

//deleting sayhi method.
delete Person.prototype.sayhi;
person1.sayhi(); //TypeError:person1.sayhi is not a function