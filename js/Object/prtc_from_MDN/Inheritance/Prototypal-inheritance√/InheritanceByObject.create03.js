/*
1:Person() → 2:Teacher()
  ↓
3:Student()

prototype=1
instance=2,3
*/

function Person(first,last,age,gender,interests){
  this.name={
    first,
    last
  };
  this.age=age;
  this.gender=gender;
  this.interests=interests;
}

Person.prototype.bio=function(){
  let string=`${this.name.first} ${this.name.last} is ${this.age} years old`;
  let pronoun;
  if(this.gender==="Male"||this.gender==="male"||this.gender==="M"||this.gender==="m"){
    pronoun=" He likes ";
    
  }else if(this.gender==="Female"||this.gender==="female"||this.gender==="F"||this.gender==="f"){
    pronoun=" She likes ";
  }else{
    pronoun=" They like ";
  }
  string+=pronoun;
  //loop
  let interests_length=this.interests.length;
  for(let i=0;i<interests_length;i++){
    if(interests_length==1){
      string+=" and "+this.interests[i]+" .";
    }else{
      string+=this.interests[i]+",";
    }
  }
  console.log(string);
}

Person.prototype.greeting=function(){
  console.log('Hi I\'m'+" "+this.name.first);
};

Person.prototype.farewell=function(){
  console.log(`${this.name.first} left the house.Bye for now!!`);
}
let person1=new Person("person","one",75,"male",["cooking","gardening"]);
person1.greeting();//Hi I'm person
person1.bio(); //person one is 75 years oldHe likescooking,gardening
person1.farewell(); //person left the house.Bye for now!!
//Teacher
function Teacher(first,last,age,gender,interests,subject){
  Person.call(this,first,last,age,gender,interests);
  this.subject=subject;
}
Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;
Teacher.prototype.greeting=function(){
  let pronoun;
  if(this.gender==="Male"||"male"||"M"||"m"){
    pronoun="Mr. ";
  }else if(this.gender==="Female"||"female"||"F"||"f"){
    pronoun="Mrs. ";
  }else{
    pronoun="Mx";
  }
  console.log(`Hi I'm ${pronoun} ${this.name.first} and I teach ${this.subject}`);
}

let teacher1=new Teacher("teacher","one",54,"male",["cooking","coding"],"Mathematics");
teacher1.greeting();//Hi I'm Mr.  teacher and I teach Mathematics
/*Inherited*/teacher1.bio(); //teacher one is 54 years oldHe likescooking,coding,
/* Inherited*/ teacher1.farewell(); //teacher left the house.Bye for now!!

//Student
function Student(first,last,age,gender,interests){
  Person.call(this,first,last,age,gender,interests);
}
Student.prototype=Object.create(Person.prototype); // This line will inherit all the methods and property from Person() constructor to Student() instance
Student.prototype.constructor=Student;
Student.prototype.greeting=function(){
  console.log("Yo ! I\'m "+this.name.first);
}
let student1=new Student("student","one",19,"female",["cooking","dancing"]);
student1.bio(); //student one is 19 years old She likes cooking,dancing,
student1.greeting(); //Yo ! I'm student
student1.farewell();//student left the house.Bye for now!!


