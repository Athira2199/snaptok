const mysql=require('mysql');
var con;
var sessionStore ;
function connectDB(){
    con= mysql.createPool({
        canRetry: true,
        database: 'snaptok',
        host: 'localhost',
        user: 'root',
        password: '',
        connectionLimit: 100
     });
     
   
   
}

function response(s){
    return new Promise(function(resolve,reject){
        con.query(s,function(err,result,fields){
            if(err){return reject(err);}
            resolve(result);
        })
    })
}

module.exports = {connectDB,response,con}