const express=require('express');
router=express.Router();

const productController=require('../controller/ProductController');


router.post('/addproduct',productController.addProduct);
module.exports=router;