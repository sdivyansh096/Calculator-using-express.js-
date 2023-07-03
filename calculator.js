//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
    if(req.body.hasOwnProperty("submit")){
        var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2;
   }
   if(req.body.hasOwnProperty("submit1")){
    var num3 = Number(req.body.num1);
    var num4 = Number(req.body.num2);

var result = num3 * num4;
}
if(req.body.hasOwnProperty("submit2")){
    var num5 = Number(req.body.num1);
    var num6 = Number(req.body.num2);

var result = num5 - num6;
}
if(req.body.hasOwnProperty("submit3")){
    var num7 = Number(req.body.num1);
    var num8 = Number(req.body.num2);

var result = num7 / num8;
}
    res.send("The result after calculation is "+result);
});
app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});