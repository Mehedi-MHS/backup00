//function name first later capital.Some improvememts done by me.
function Person(first,last,age,gender,interests){
  this.name={
    first:first||"anonymas",
    last:last||""
  };
  this.age=age;
  this.gender=gender;
  let preposition=this.gender.toLowerCase()=="female"?"She":"He";
  this.interests=interests;
  let interests_length=this.interests.length;
  let interests_string="";
  for(var i=0;i<interests_length;i++){
    var str=(i==0)?" ":(i==interests_length-1)? " and ":",";
    interests_string+=str+this.interests[i];
  }
  this.bio=function(){
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. ${preposition} likes ${interests_string} .`);
  }
  this.greeting=function(){
     console.log(`Hi ! I am ${this.name.first} .`);
  }
}
// ^^^^^^End of constructor function^^^^^

//making instance of constructor function
//must use "new" keyword and function name first letter must be capital letter
let person1=new Person("John","Doe",30,"male",["basketball","scatting","cricket"]);
person1.bio();
person1.greeting();

let person2=new Person("Amita","Johnson",25,"female",["Ludo","singing","dancing","joking"]);
person2.bio();
person2.greeting();


  
  