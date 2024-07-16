const User = require('../model/account')

class SignUpController{

    signup(req, res){
        res.render('signup',{
            layout: 'main'
        })
    };

    async usersignup(req, res, next){
        const data={
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            repassword: req.body.repassword
            }
    
        const checkEmailExist = await User.findOne({email:req.body.email})
        if(checkEmailExist != null){
            if(req.body.email === checkEmailExist.email){
                res.render('signup', {message:"Email đã tồn tại"})
            }
            else{
                if(data.password === data.repassword){
                    await User.insertMany([data])
                    res.redirect('login')
                }
                else{
                    res.render('signup', {message:"Mật khẩu không trùng khớp"})
                }
            }
        }
        else{
            if(data.password === data.repassword){
                await User.insertMany([data])
                res.render('home')
            }
            else{
                res.render('signup', {message:"Mật khẩu không trùng khớp"})
            }
        }
    }
   
}

module.exports = new SignUpController