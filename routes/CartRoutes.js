const express=require('express');
const router= express.Router()

const cartController=require('../controller/CartController')

router.post('/addcart',cartController.addToCart);
router.get('/getdata/:id',cartController.getCartDatabyProductId)

module.exports=router;