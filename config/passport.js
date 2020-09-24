const LocalStratergy=require('passport-local').Strategy;
const {response} = require('./db')

module.exports={
    lStratergy : function(passport){
        passport.use(new LocalStratergy({
            passReqToCallback : true
        },function(req,username,password,done){
            s =  `SELECT * FROM users WHERE email='${username}'`
            response(s)
                .then((user)=>{
                    if(user.length != 0){
                        if(user[0].password == password){
                            return done(null,user[0])
                        }
                    }
                    else{
                        console.log("error")
                        return done(null,false)
                    }
                })
                .catch((err)=>{
                    console.log("error");
                    return done(null,false)
                })
        }));
        passport.serializeUser(function(user,done){
            console.log('serailize',user.email)
            done(null,user.email)
        })
        passport.deserializeUser(function(email,done){
            s =  `SELECT * FROM users WHERE email='${email}'`
            response(s)
                .then((user)=>{
                    user = user[0]
                    console.log(user)
                    done(null,user);
                })
                .catch((err)=>{
                    return done(null,false)
                })
        });
    },
}
