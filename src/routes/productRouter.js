const express=require('express')
const router=express.Router()

const productController=require('../app/controllers/ProductController')

router.get('/', productController.product)

router.get('/detail', productController.detail)


module.exports = router