function Person(first,last,age){
  this.name={
    first:first,
    last:last
  };
  this.age=age;
}

let person1=new Person("john","Doe",75);
let person2=new Person("Lorem","Ipsum",77);

console.log(person1.constructor); //Person(first,last,age){...}
console.log(person2.constructor); //Person(first,last,age){...}