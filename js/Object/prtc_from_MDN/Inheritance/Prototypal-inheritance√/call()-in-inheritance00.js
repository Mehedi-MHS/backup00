//MDN DOCS -OOJS-04
function Person(first,last,gender,interests){
  this.name={
    first:first,
    last:last
  };
  this.gender=gender;
  this.interests=interests
};

Person.prototype.greeting=function(){
  console.log("Hi I'm "+this.name.first);
}
//Now we will create Teacher constructor which have the same property like Person
//constructor. But we will add some other formal method and properties like which subject he teaches and formal greeting

function Teacher(first,last,gender,interests,subject){
  Person.call(this,first,last,gender,interests);//This line is equivalent to
  /*
function Teacher(first,last,gender,interests,subject){
  this.name={
    first:first,
    last:last
  };
  this.gender=gender;
  this.interests=interests
};
  */
  
  this.subject=subject;
}

console.log(Object.getOwnPropertyNames(Teacher.prototype)); //constructor. Output-type:array
console.log(Object.getOwnPropertyNames(Person.prototype)); //constructor,greeting. Output-type:Array


