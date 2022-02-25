var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();
app.use(cookieParser());

app.get("/setcookie",function(req,res){
  res.cookie("username","John Doe");
  res.send("Successfully set cookie !");
});
app.get("/getcookie",function(req,res){
  if(req.cookies["username"] == undefined){
    res.redirect("/");
  }else{
  let uname1=req.cookies["username"];
  let uname2=req.cookies.username;
  res.send(uname1+"-> (req.cookie[\"username\") <br>"+uname2+" -> (req.cookie.username)");
  }
});

app.get("/clearcookie",function(req,res){
  res.clearCookie("username");
  res.redirect("/");
});

app.get("/",function(req,res){
  let txt=`<a href="/setcookie">Set cookie</a><br>
  <a href="/getcookie">Get Cookie</a><br>
  <a href="/clearcookie">Clear Cookie</a>`;
  res.send(txt);
});



let port=process.env.PORT||3000;
app.listen(port,function(){
  console.log("Server is listening at port %s",port);
});


