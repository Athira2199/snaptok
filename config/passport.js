const LocalStratergy=require('passport-local').Strategy;
const User=require('../models/user');
const bycrypt=require('bcryptjs');
const { response } = require('express');

module.exports={
    lStratergy : function(passport){
        passport.use(new LocalStratergy({
            passReqToCallback : true
        },function(req,username,password,done){
            let query={email: username};
        }));
        passport.serializeUser(function(user,done){
            done(null,user.id)
        })
        passport.deserializeUser(function(id,done){
            User.findById(id,function(err,user){
                done(err,user);
            });
        });
    },
    
    
}
