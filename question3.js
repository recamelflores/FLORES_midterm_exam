 //Create a simple Express.js server that listens on port 3000.

 var express = require('express');
 var app = express();
 
 app.listen(3000, function(err) {
 if(err){
 console.log(err);
 } else {
 console.log("Express is Working! Recamel Flores");
 }
 });
 
 //To get the INFO in localhost:3000
 app.get('*', function(req, res) {
 res.status(200).send('Express is Working! Recamel Flores')
 });
 