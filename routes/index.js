const express = require('express');
const router = express.Router();
const {trapAuthUser} = require('../middleware/auth')

router.get('/',trapAuthUser,(req,res)=>{
    res.render('index',{
        message : req.query.message || ''
    })
})

module.exports = router