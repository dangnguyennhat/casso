const express=require('express')
const router=express.Router()

const paymentController=require('../app/controllers/PaymentController')

router.post('/', paymentController.payment)

router.get('/cancel', paymentController.payment)


module.exports = router