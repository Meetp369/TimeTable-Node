const xlsx= require('xlsx');
const ExcelSchema= require('../model/ExcelSchema');
const path= require('path');
const multer=require('multer');
const UploadSchema=require('../model/UploadSchema');

const storage=multer.diskStorage({
    destination:"./uploads/",
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const upload=multer({
    storage:storage,
    limits:{fileSize:9000000},
}).single("file");

const uploadDataAndSave=async(req,res)=>{
    upload(req,res,async(err)=>{
        if(err){
            res.json({
                msg:err
            });
        }else{
            if(req.file==undefined){
                res.json({
                    msg:"no file selected",
                })
            }else{
                console.log(req.body.name);
                var data
            }
        }
    })
}