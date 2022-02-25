function Person(first,last,age){ //replacw first,last,age with a,b,c
  this.name={
    first:first,
    last:last
  };
  this.age=age;
}

Person.prototype.sayhi=function(){
  console.log("Hi I am "+this.name.first);
}

Person.prototype.greeting=function(){
  console.log("Good morning from "+this.age+" year human");
}

let person1=new Person("Lor","Ipsum",75);
person1.sayhi(); //Hi I am Lor
person1.greeting();//Good morning from 75 year human

/*
a fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype. This makes the code easier to read, as the constructor only contains the property definitions, and the methods are split off into separate blocks
*/