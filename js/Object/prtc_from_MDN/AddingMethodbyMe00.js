function Student(name,age,roll){
  this.name=name;
  this.age=age;
  this.roll=roll;
}

Student.prototype.sayhi=function(){
  return console.log(`Hi i am ${this.name} . I am ${this.age} years old. My roll number is ${this.roll}`);
}

let st1=new Student("John",15,18252);
st1.sayhi();
//Hi i am John . I am 15 years old. My roll number is 18252

//If you use Student.sayhi instead of Student.prototype.sayhi, it will throw an error and will not work
