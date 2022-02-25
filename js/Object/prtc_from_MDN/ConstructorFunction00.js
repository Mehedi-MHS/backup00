//basic constructor function
function Person(nam){
  this.name=nam; // Here this.name is equivalent to Person.name
  this.greeting=function(){
    console.log(`Hi ! I\'m ${this.name}`);
  }
}
let x=new Person("John");
console.log(x.name); // John
x.greeting(); // Hi ! I'm John

/*
Note: A constructor function name usually starts with a capital letter — this convention is used to make constructor functions easier to recognize in code.
*/