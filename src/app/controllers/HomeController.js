class HomeController{

    home(req, res){
        res.render('home',{
            layout: 'main'
        })
    };

    showroom(req, res){
        res.render('showroom',{
            layout: 'main'
        })
    }
   
}

module.exports = new HomeController