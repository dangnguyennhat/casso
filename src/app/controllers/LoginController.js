const User = require('../model/account')

class LoginController{

    login(req, res){
        res.render('login',{
            layout: 'main'
        })
    };

    async userLogin(req, res){
        try{
            const check = await User.findOne({email:req.body.email})
            if(check.password===req.body.password){
                res.redirect('/')
            }
            else{
                res.render('login', {message:"Sai mật khẩu"})
            }
        }
        catch{
            res.render('login', {message:"Sai email"})
        }
    }
   
}

module.exports = new LoginController