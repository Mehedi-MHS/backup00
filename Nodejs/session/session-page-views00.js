//req.session.name="value"
var express=require("express");
var session=require("express-session");
var app=express();
// Session Setup
app.use(session({
  // It holds the secret key for session
  secret:"Shh! its a secret!",
  // Forces the session to be saved
    // back to the session store
  resave:true,
  // Forces a session that is "uninitialized"
    // to be saved to the store
  saveUninitialized:true
}));

app.get("/viewpage",function(req,res){
  if(req.session.page_views){
    req.session.page_views++;
    res.send(`You have visited this page :${req.session.page_views} times <br><a href="/">Home</a>`);
  }else{
    req.session.page_views=1;
    res.send(`Welcome to this page. <br><a href="/">Go Home</a>`);
  }
});

app.get("/",function(req,res){
  let txt=`<a href="/viewpage">Viewpage </a><br><a href="/clearSession">Clear Session</a>`;
  res.send(txt);
});

//delete session 
app.get("/clearSession",function(req,res){
  req.session.destroy(function(err){
    console.log("session destroyed");
    res.redirect("/");
  });
});

let port=process.env.PORT||3000;
app.listen(port,function(){
  console.log("server listening port %s",port);
});



