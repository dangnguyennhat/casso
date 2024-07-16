class ProductController{

    product(req, res){
        res.render('product',{
            layout: 'main'
        })
    };

    detail(req, res){
        res.render('product_detail',{
            layout: 'main'
        })
    }
   
}

module.exports = new ProductController