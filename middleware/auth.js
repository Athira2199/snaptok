module.exports = {
    checkAuth : function (req,res,next){
        if(req.isAuthenticated()){
            return next()
        }
        else{
            res.redirect('/?message=please login to continue')
        }
    },
    trapAuthUser : function (req,res,next){
        if(req.isAuthenticated()){
            res.redirect('/profile')
        }
        else{
            return next()
        }
    }
}