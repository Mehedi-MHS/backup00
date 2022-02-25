//Basic class
class Person{
  constructor(first,last,age,gender,interests){
    this.name={
      first,
      last
    };
    this.age=age;
    this.gender=gender;
    this.interests=interests;
  }
  greeting(){
    console.log(`Hi I\'m ${this.name.first}`);
  }
  farewell(){
    console.log(`${this.name.first} has left the house.Bye for now!`);
  }
}
//must declare the methods inside the constructor
//making instance
let person1=new Person("John","Doe",55,"Male",["skitting"]);
person1.greeting(); //Hi I'm John


//Here inheritance means creating a subclass. "extends" keyword is used for this
class Teacher extends Person{
  constructor(first,last,age,gender,interests,subject,grade){ //must use all the constructor parameter
    super(first,last,age,gender,interests);
    this.subject=subject;
    this.grade=grade;
    //subject and grade are specific to Teacher
  }
  //To inherit all the methods and properties from Person constructor,use the "super()" keyword
  greeting(){
    console.log(`Hello I\'m ${this.name.first} and I teach ${this.subject}`);
  }
}

let teacher1=new Teacher("Lorp","Baiden",54,"Male",["cooking"],"Mathematics","2nd grade");
teacher1.greeting(); //Hello I'm Lorp and I teach Mathematics
teacher1.farewell();//Lorp has left the house.Bye for now!

