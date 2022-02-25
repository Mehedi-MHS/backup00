//Getter and Setter is applied in Teacher() conatructor
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
}

class Teacher extends Person{
  constructor(first,last,age,gender,interests,subject,grade){
    super(first,last,age,gender,interests);
    this._subject=subject;
    this.grade=grade;
  }
  get subject(){ //getter
    return this._subject;
  }
  set subject(newSubject){  //setter
    this._subject=newSubject;
  }
}

let t1=new Teacher("Leonell","Forback",76,"Male",["shooting","cooking",],"Mathematics","1st grade");
console.log(t1.subject);//Mathematics
t1.subject="Physics Part 2"; //Setting new value
console.log(t1.subject); //Physics Part 2


