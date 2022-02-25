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
console.log(person1.constructor.name);//Person
console.log(person2.constructor.name);//Person

let person3=new person1.constructor("zain","jsnz",88);
console.log(person3.constructor.name);//Person
//constructor.name will always return the main constructor name
