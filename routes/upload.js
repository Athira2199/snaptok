const express = require('express');
const router = express.Router();
const multer = require('multer')
const {response} = require('../config/db')

//file.fieldname + '-' +
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/videos')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
   
var upload = multer({ storage: storage })

router.post('/',upload.single('video'),(req,res)=>{
    s = `INSERT INTO videos (email,title,description,videoLink) VALUES ('${req.user.email}','${req.body.title}','${req.body.description}','${req.file.filename}')`
    response(s)
        .then((user)=>{
            if(user.affectedRows!=0){
                res.redirect('/profile?message=Upload Successful')
            }
            else{
                res.redirect('/profile')
            }
        })
        .catch((err)=>{
            console.log("error");
            throw err;
        })
})



module.exports = router