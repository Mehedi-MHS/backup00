/////Part:01
let person1={
  name:{
    first:"john",
    last:"doe"
  },
  age:45
};
//setting Object members
console.log(person1.age); //45
person1.age=100;
console.log(person1.age);//100
console.log(person1["name"]["first"]);//john
person1["name"]["first"]="Aladin";
console.log(person1["name"]["first"]);//Aladin

//////Part:02:setting members and values dynamically
/*
USE bracket notation to set both object members
and object values.
*/
let dataName="height";
let dataValue="2.65cm";
person1[dataName]=dataValue;
console.log(person1.height);//2.65cm








