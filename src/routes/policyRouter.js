const express=require('express')
const router=express.Router()

const policyController=require('../app/controllers/PolicyController')

router.get('/', policyController.policy)


module.exports = router