//check call()-in-inheritance00.js for first parametered example.
//here we will see when to use non parametered call()


function Brick(){ //No parameter in the Brick function
  this.width=10;
  this.height=20
}

function BlueGlassBrick(){
  Brick.call(this);//
  this.opacity=0.5;
  this.color="blue"
}

var brick1=new BlueGlassBrick();
console.log(brick1.color);//blue
console.log(brick1.width);//10


