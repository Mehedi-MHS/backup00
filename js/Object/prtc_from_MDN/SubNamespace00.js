//general Namespace

let obj1={
  name:["john","doe"],
  age:76
}
//accessing using bracket notation
console.log(obj1.name[0] +" "+ obj1.name[1]);//john doe

//creating sub Namespace

let obj2={
  name:{
    first:"john",
    last:"doe"
  },
  age:76
}
//accessing using dot notation
console.log(obj2.name.first +" "+obj2.name.last); //john doe

//accessing using bracket notation
console.log(obj2["name"]["first"]+ " "+obj2["name"]["last"]); //john doe
