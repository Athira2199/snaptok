const express = require('express');
const router = express.Router();
const {checkAuth} = require('../middleware/auth')
const {response} = require('../config/db')
router.use(checkAuth)

router.get('/',(req,res)=>{
    s = `SELECT title,description,videoLink FROM videos WHERE email = '${req.user.email}'`
    response(s)
        .then((videos)=>{
            console.log(videos)
            res.render('profile',{
                user : req.user || '',
                message : req.query.message || '',
                videos : videos
            })
        })
        .catch((err)=>{
            console.log(err)
            throw err;
        })
})
router.post('/edit',(req,res)=>{
    console.log(req.body)
    s = `UPDATE users SET bio = '${req.body.bio}', age = '${req.body.age}' WHERE email = '${req.user.email}'`
    response(s)
        .then((user)=>{
            if(user.affectedRows!=0){
                res.redirect('/profile?message=Update Successful')
            }
            else{
                res.redirect('/profile')
            }
        })
        .catch((err)=>{
            console.log(err)
            throw err;
        })
})

module.exports = router