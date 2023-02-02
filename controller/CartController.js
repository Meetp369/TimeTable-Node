const CartSchema = require("../model/CartSchema");
const castSchema=require("../model/CartSchema");

module.exports.addToCart=(req,res)=>{
    const cart= new castSchema(req.body);
    cart.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Internal server error",
            });
        }else{
            res.status(200).json({
                message:"Product added to cart",
                data:data,
            });
        }
    });
};

module.exports.getCartDatabyProductId=(req,res)=>{
    console.log()
    let id = req.params.id;
    castSchema.find({product:id}).populate('employee').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error"
            })
        }else{
            res.status(200).json({
                message:"data",
                length:data.length,
                data:data
            })
        }
    })
   
    console.log(castSchema);
}