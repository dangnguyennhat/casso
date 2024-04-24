const express=require('express')
const router=express.Router()

const cancelController=require('../app/controllers/CancelController')


router.get('/', cancelController.cancel)


module.exports = router