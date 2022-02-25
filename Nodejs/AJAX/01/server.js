let express=require("express");
var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/upload",function(req,res){
  res.send("Hello Mr. "+req.body.name+" You are "+req.body.age+" years old");
});

app.listen(3000,function(){
  console.log("Server is listening at port 3000");
});


