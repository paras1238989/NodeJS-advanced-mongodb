var doAssignment = new Promise(function(resolve,reject){
    var isCompleted=true;
    if(isCompleted){
        resolve('completed');
    }else{
        reject('Not Completed');
    }
});

doAssignment
.then(function(status){
    console.log("The Assignment is:"+ status);})
.catch(function(status){
    console.log("The Assignment is:"+status);})
