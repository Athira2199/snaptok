const path = require('path');
const express=require('express');
const bodyParse=require("body-parser");
const passport = require('passport')
const {connectDB,con} = require('./config/db')
var session = require('express-session')
var mysql_store = require('express-mysql-session')(session)
connectDB();

// sessionStore = new mysql_store({
//     expiration: 60 * 2000
// }, con);

const app=express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded())

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

// var sessionStore = new mysql_store({}, con);

app.use(session({
    secret: 'snaptok',
    resave: true,
    saveUninitialized: true,
}));

const {lStratergy}=require('./config/passport')
lStratergy(passport)

// app.use(flash());

// app.use(function(req, res, next){
//     res.locals.message = req.flash();
//     next();
// });

app.use(passport.initialize());
app.use(passport.session());


app.use('/',require('./routes/index'))
app.use('/auth',require('./routes/auth'))
app.use('/profile',require('./routes/profile'))
app.use('/upload',require('./routes/upload'))





app.listen(PORT,console.log(`server running in ${PORT}`))