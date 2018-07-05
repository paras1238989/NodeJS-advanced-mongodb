const mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
var dbName="demo";
var db;

function connectToDatabase(){
    mongoClient.connect(url,function(err,client){
        if(err){
            console.log("Unable to connect to the server");
        }
        else{
            console.log("Successfull connected");
            db=client.db(dbName);
            client.close();
        }
    })
    return db;
}

module.exports = connectToDatabase();