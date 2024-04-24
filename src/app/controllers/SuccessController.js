class SuccessController{

    success(req, res){
        res.render('success',{
            layout: 'main'
        })
    }
   
}

module.exports = new SuccessController