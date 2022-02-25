//use for in loop to get object properties
let obj={
  name:"John doe",
  age:76,
  gender:"male"
};
for(x in obj){
  console.log(x);
}
// name
//age
//gender

for(keys in obj){
  console.log(obj[keys]); //dot notation is not working
}
//john doe
// 76
//male