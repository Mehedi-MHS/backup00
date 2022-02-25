var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();
app.use(cookieParser());

app.get("/setCookie",function(req,res){
  res.cookie("username","John doe",{maxAge:3000}); //cookie will expire after 3 seconds
  res.send("Cookie set successfull ! <br>Cookies are "+req.cookies["username"]); //cookies are undefined.
});

app.get("/getcookie",function(req,res){
  if(!req.cookies["username"]){
    res.send("Sorry No cookies found!");
  /*  setTimeout(function() {
      res.redirect("/");
    },3000);*/
  }else{
    res.status(200).send(req.cookies["username"]);
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


