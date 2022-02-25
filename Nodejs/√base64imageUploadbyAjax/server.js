var express=require("express");
var fs=require("fs");
var app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json({
  limit:"5mb" //most important to specify the base64 data length
}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/upload",function(req,res){
  var filename=req.body.name,
  image=req.body.data;
  if(filename.length>0 && image.length>5){
    fs.writeFile("./uploads/"+filename,image,{encoding:'base64'},function(a){
      console.log("√image created successfully");
    });
    res.send("Filename-length:"+filename.length+"\n"+"data length: "+image.length);
  }else{
     res.send("Messege from server : File not sent");
  }
 });

var port=process.env.PORT||3000;
app.listen(port,function(){
  console.log("Server running at %s",port);
});



