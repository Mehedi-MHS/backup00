let fruit={
  name:"apple",
  color:"red",
  weight:"100gm"
};
console.log(fruit.hasOwnProperty("name")); //true
//^^^^the fruit object has the properties name,color and weight
console.log(fruit.hasOwnProperty("price")); //false
console.log(fruit.hasOwnProperty("weight")); //true
console.log(fruit.hasOwnProperty("color")); //true


