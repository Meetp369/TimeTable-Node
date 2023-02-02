const departmentSchema=require('../model/DepartmentSchema');

module.exports.addDepartment=(req,res)=>{


    const department=new departmentSchema(req.body)
    department.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error Occured",
                error:err
            })
        }
        else{
            res.status(200).json({
                message:"department Added Successfully",
                data:data
            })
        }
    })
}