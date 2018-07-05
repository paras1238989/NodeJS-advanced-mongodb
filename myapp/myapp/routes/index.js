var express = require('express');
var router = express.Router();
var db= require('./../public/javascripts/dbConnection');
/* GET home page. */


router.post('/login',function(req,res,next){
  var res=db.collection('Users').findOne({name:req.body.username,password:req.body.password});
  if(res){
    res.send("Successful login")
  }
  else{
    res.status(403).send("Failed");
  }
})



module.exports = router;
