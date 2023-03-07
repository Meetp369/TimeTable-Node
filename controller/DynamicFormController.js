const dynamicFormSchema=require('../model/DynamcFormSchema');
module.exports.addMultipleObj=(req,res)=>{
  
    dynamicFormSchema.insertMany(req.body).then((check)=>{
        res.status(200).json({
            message:"data added"
        })
    }).catch((err)=>{
        console.log(err);
    })
    
}