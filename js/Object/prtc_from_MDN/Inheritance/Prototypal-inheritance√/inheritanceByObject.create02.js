//from MDN DOCS-04

//Here Person() is prototype function and Teacher() is inherited from Person() 
function Person(first,last,age,gender,interests){
  this.name={
    first:first,
    last:last
  };
  this.age=age;
  this.gender=gender;
  this.interests=interests;
}
Person.prototype.greeting=function(){
  return console.log(`Hey bro!! i am ${this.name.first} ! . `);
}

Person.prototype.farewell=function(){
  return console.log(` ${this.name.first} left the building. Bye for now!!`);
}
let person1=new Person("John","Doe",75,"male",["football","gardening"]);
person1.greeting();//Hey bro!! i am John ! . 


//Creating Teacher() Object as instance of Person() prototype. 
function Teacher(first,last,age,gender,interests,subject){ //extra parameter "subject"
  Person.call(this,first,last,age,gender,interests);
  this.subject=subject;
}
//After using this process, the instance of Person() prototype{Teacher() function} can inherit all the 
//methods and property from Person() Object. And will also inherit the constructor
Teacher.prototype=Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype,"constructor",{
  value:Teacher, //constructor name //this can also be done by using : Teacher.prototype.constructor=Teacher
  enumerable:false,//so that it does not appear in "for in" loop
  writable:true
});

Teacher.prototype.greeting=function(){
  let prefix;
  if(this.gender==="male"||this.gender==="Male"||this.gender==="m"||this.gender==="M") {
    prefix="Mr. ";
  }else if (this.gender="Female"||"female"||"F"||"f"){//dont try this: this.gender==="Male"||"male"||"M"||"m"
  prefix="Mrs. ";
  }else{
    prefix="Mx. ";
  }
  
  return console.log(`Hello this is ${prefix} ${this.name.first} and I teach ${this.subject}`);
}


let teacher1=new Teacher("Lonn","Doe",75,"male",["cooking","gardening"],"Mathematics");
teacher1.greeting(); //Hello this is Mr.  Lonn and I teach Mathematics
teacher1.farewell(); //Inherited this method from Person() constructor
//Lonn left the building. Bye for now!!