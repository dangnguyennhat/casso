class HomeController{

    home(req, res){
        res.render('home',{
            layout: 'main'
        })
    }
   
}

module.exports = new HomeController