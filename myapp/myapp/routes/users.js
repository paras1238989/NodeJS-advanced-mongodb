var express = require('express');
const mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
var dbName="demo";
var fs=require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',function(req,res,next){
  
  mongoClient.connect(url,function(err,client){
    if(err){
        console.log("Unable to connect to the server");
    }
    else{
        console.log("Successfull connected to mongo");
        var db=client.db(dbName);
        var collection=db.createCollection('Users');
        db.collection('Users').insert({name:req.body.username,password:req.body.password}); 
        
        client.close();
        res.send("Registered");
      }
    })

});
module.exports = router;
