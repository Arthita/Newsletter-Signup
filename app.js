const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
})
app.post("/",function(req,res){
  var fname=req.body.firstName;
  var lname=req.body.lastName;
  var el=req.body.email;
  console.log(fname," ",lname," ",el);
})
app.listen(5000,function(){
  console.log("Server is running");
})
