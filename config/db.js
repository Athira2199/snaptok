const mysql=require('mysql');

function connectDB(){
    pool=mysql.createPool({
        host:"localhost",
        user:"root",
        password:"",
        database:"snaptok"
    });
}

function response(s){
    return new Promise(function(resolve,reject){
        pool.query(s,function(err,result,fields){
            if(err){return reject(err);}
            resolve(result);
        })
    })
}

module.exports = {connectDB,response}