const express=require('express')
const router=express.Router()

const homeController=require('../app/controllers/HomeController')

router.get('/', homeController.home)

router.get('/showroom', homeController.showroom)

module.exports = router