var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();
app.use(cookieParser());
app.get("/cookieset",function(req,res){
 //setting cookie by using res.cookie()
  res.cookie("cookie-name","cookie-value");
  res.cookie("company","AbulBiri");
  res.cookie("fruit","apple");
  res.status(200).send("Cookie is set");
});

app.get('/cookieget',function(req,res){
  //getting cookie by req.cookies
  res.status(200).send(req.cookies); //req.cookies for multiple cookies and req.cookie for single cookie
});

app.get("/",function(req,res){
  res.status(200).send("<a href='http://localhost:3000/cookieget'>Get cookie</a><br/><a href='http://localhost:3000/cookieset'>Set cookie</a>");
});

var server=app.listen(3000,function(){
  var host=server.address().host;
  var port=server.address().port;
  console.log("Example app is listening at http://%s:%s",host,port);
});


/*
http://localhost:3000/cookieset
Cookie is Set

http://localhost:3000/cookieget
{"cookie-name":"cookie-value","company":"AbulBiri","fruit":"apple"}



