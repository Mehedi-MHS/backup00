function Person(first,last,age){
  this.name={
    first:first,
    last:last
  };
  this.age=age;
  this.sayhi=function(){
    return console.log(`Hi i am ${this.name.first}`);
  }
}

//General method of creating instances using main constructor definition[here:new Person()]
let person1=new Person("john","Doe",75);
let person2=new Person("Lorem","Ipsum",77);

console.log(person1.constructor); //Person(first,last,age){...}
console.log(person2.constructor); //Person(first,last,age){...}
console.log(person1.constructor.name);//Person
//Cleaver method.it can be really useful when you want to create a new instance and don't have a reference to the original constructor easily available for some reason.
//here we will create new object(object instances) without using main constructor function(using any instance of constructor)

let person3= new person2.constructor("jhonny","donny",77);
console.log(person3.constructor); //Person(first,last,age){...}
person3.sayhi(); //Hi i am jhonny
