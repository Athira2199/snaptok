const express = require('express');
const router = express.Router();
const {response} = require('../config/db')

router.post('/signup',(req,res)=>{
    s =  `SELECT * FROM users WHERE email='${req.body.email}'`
    response(s)
        .then((user)=>{
            console.log(user)
            if( user.length == 0 ){
                s = `INSERT INTO users (email,name,bio,age,password) VALUES ('${req.body.email}','${req.body.name}','${req.body.bio}','${req.body.age}','${req.body.password}')`
                response(s)
                    .then(()=>{
                        console.log("done")
                    })
            }
            else{
                res.redirect('/?message=user exists')
            }
        })
        .catch((err)=>{
            console.log("error");
            throw err;
        })
})



module.exports = router