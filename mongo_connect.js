const mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
var dbName="demo";

var books=[{
    name:'Java',
    price:600,
    description:"Beginners Java"
},{
    name:'C++',
    price:500,
    description:'NA'
},{
    name:'Ruby',
    price:350,
    description:'Advanced level'
}]

mongoClient.connect(url,function(err,client){
    if(err){
        console.log("Unable to connect to the server");
    }
    else{
        console.log("Successfull connected");
        var db=client.db(dbName);
/*         var collection=db.createCollection('Books');
        db.collection('Books').insert({name:'NodeJS',price:234.4,description:'For Beginners'}); */
        
        /* db.collection('Books').insert(books,function(err,data){
            if(err) console.log(Error in insertion);
            console.log("Inserted successfully");
        }); */

        db.collection('Books').find({'price':{$gte:500}}).project({'_id':0,name:1}).toArray(function(err,data){
            console.log(data);
        });

        client.close();
    }
})