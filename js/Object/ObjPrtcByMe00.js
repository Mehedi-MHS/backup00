function Person(first,last,age,gender){
  this.name={
    first,
    last
  };
  this.age=age;
  this.gender=gender;
}

function Student(first,last,age,gender,roll){
   Person.call(this,first,last,age,gender);
  this.roll=roll;
}

Student.prototype.sayhi=function(){ //It isnot accessible via Person() constructor.Only accessible by Student constructor.
  return console.log(`Hi this is ${this.name.first} . I am a Student`);
}

let st1=new Student("John","Doe",75,"Male");
st1.sayhi();//Hi this is John . I am a Student
let p=new Person("Person","One",55,"male");
p.sayhi();//p.sayhi is not a function
Person.prototype.sayhi=Student.prototype.sayhi;

p.sayhi(); //Hi this is Person . I am a Student
