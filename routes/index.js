const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{
        message : req.query.message || ''
    })
})

module.exports = router