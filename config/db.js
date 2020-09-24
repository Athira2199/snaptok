const mysql=require('mysql');

function connectDB(){
    con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"snaptok"
    });
    con.connect(function(err){
        if(err) throw err;
        console.log("connected");
    })
}

function response(s){
    return new Promise(function(resolve,reject){
        con.query(s,function(err,result,fields){
            if(err){return reject(err);}
            resolve(result);
        })
    })
}

module.exports = {connectDB,response}