var express=require("express");
var fs=require("fs"); //to save the file (that means upload the file :) 
var path=require("path"); //to get file extension
var app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json({
  limit:"2mb" //most important to specify the base64 data length
}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/upload",function(req,res){
  var filename=req.body.name,
  image=req.body.data,
  oldSize=req.body.mainImageSize,
  newsize=image.length,
  extension=path.extname(filename),
  newfilename="MHS-"+Date.now()+extension,
  newimagesize=image.length;
  if(filename.length>0 && image.length>5){
    fs.writeFile("./uploads/"+newfilename,image,{encoding:'base64'},function(a){
      console.log("√image created successfully");
    });
    res.send("Old image size:"+oldSize/1024+"kb"+"\n"+"New image size: "+newimagesize/1024+"kb"+"\n"+"Saved :"+(oldSize - newimagesize)/1024+"kb");
  }else{
     res.send("Messege from server : File not sent");
  }
 });

var port=process.env.PORT||3000;
app.listen(port,function(){
  console.log("Server running at %s",port);
});



