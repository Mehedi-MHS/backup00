1:use express-session module
2:let session=require("express-session");
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


3:req.session.name

4:Delete session:

req.session.destroy(function(err){
console.log("session destroyed");
});
