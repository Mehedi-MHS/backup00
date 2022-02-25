const express=require("express");
const multer=require("multer");
const path=require("path"); //for adding file extension
const app=express();
var port=process.env.PORT||3000;

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

var storage=multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,"./uploads"); //here "." before "/uploads" is most important
  },
  filename:function(req,file,callback){
    callback(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
  }
});

app.post("/upload",function(req,res){
  var upload=multer({storage:storage}).single("profilepic");
  upload(req,res,function(err){
    if(err){
      return res.end(err + "\n"+err.stack);
    }
    res.end("File is uploaded");
  });
});

app.listen(port,function(){
  console.log("server listening port %s",port);
});