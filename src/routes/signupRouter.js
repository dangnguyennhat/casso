const express=require('express')
const router=express.Router()

const signupController=require('../app/controllers/SignUpController')

router.get('/', signupController.signup)

router.post('/', signupController.usersignup)


module.exports = router