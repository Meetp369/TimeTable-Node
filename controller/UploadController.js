const path=require('path');
const multer=require('multer');
const UploadSchema=require('../model/UploadSchema');

const storage=multer.diskStorage({
    destination:'./uploads/',
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload=multer({
    storage:storage,
    limits:{fieldNameSize:9000000}
}).single('profilePic');



exports.uploadFile=(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.json({
                mag:err
            })
        }
        else{
            if(req.file==undefined){
                res.json({
                    msg:'Error: No file selected'
                })
            }
            else{

                let abspath=path.resolve('uploads/'+req.file.originalname)
                const upload=new UploadSchema({
                    nme:req.file.originalname,
                    path:abspath
                })
                upload.save((err,data)=>{
                    if(err){
                        res.status(500).json({
                            masg:"Error: "+err
                        })
                    }
                    else{
                        res.json({
                            msg:'File uploaded successfully',
                            file:`uploads/${req.file.filename}`
                        })
                    }
                })
            }
        }
    })
}