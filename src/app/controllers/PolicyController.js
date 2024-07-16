const User = require('../model/account')

class PolicyController{

    async policy(req, res){
        res.render('policy',{
            layout: 'main'
        })
    }
   
}

module.exports = new PolicyController