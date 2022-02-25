const person = {
  name:["John","Doe"],
  age:32,
  interests:["Cricket","Skitting"],
  greeting:function(){
    console.log(`Hi I\'m ${this.name[0]} ${this.name[1]}`);
  },
  bio:function(){
    console.log(`I am ${this.name[0]}`);
  },
  country:function(name="Australia"){ //Default value is Australia
    console.log(`I was born in ${name}`);
  }
};


console.log(person.name[0]); //John
person.greeting(); // Hi I'm John Doe
person.bio(); // I am John
person.country("USA"); // I was born in USA
person.country(); // I was born in Australia
