const mongoose=require('mongoose');
var url="mongodb://localhost:27017/testdb";
mongoose.connect(url,function(error){
    if(error) console.log("Error in connecting to mongo server");
    console.log(" Connected successfully");
    var person=mongoose.Schema;
    var personSchema=new person({
        pid:Number,
        name:String,
        city:String,
    })

    var personModel=mongoose.model("personModel",personSchema);
    var p1=new personModel([{pid:111,name:'Paras',city:'Pune'}]);

    p1.save(function(err){
        console.log('Data saved');
        mongoose.disconnect();
    })
})