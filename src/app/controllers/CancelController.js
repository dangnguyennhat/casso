class CancelController{

    cancel(req, res){
        res.render('cancel',{
            layout: 'main'
        })
    }
   
}

module.exports = new CancelController