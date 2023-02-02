const employeeSchema = require('../model/EmployeeSchema');
const mailer=require('../util/mailer');
// import { sendMail } from '../util/mailer';
let x=0
module.exports.addEmployee = async(req,res)=>{


    const employee = new employeeSchema(req.body)
    // console.log(employee.email)
    // employee.save((err,data)=>{
    //     if(err){

    //         res.status(500).json({
    //             message:"Error Occured",
    //         })
    //     }
    //     else{
    //         mailer.sendMail(employee.email)
    //         res.status(201).json({
    //             message:"Employee Added Successfully",
    //             data:data
    //         })
    //     }
    // })
    x = await mailer.sendMail(employee.email)
    // setTimeout(()=>{
    //     console.log(x+" in email send")
    //     res.status(201).json({
        
    //         message:"email sent successfully",
    //         data:employee.email
    //     })
    // },7000)
        console.log(x+" in email send")
        res.status(201).json({
        
            message:"email sent successfully",
            data:employee.email
        })

}

module.exports.getAllEmployee=(req,res)=>{
    employeeSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error Occured",
                error:err
            })
        }
        else{
            res.status(200).json({
                message:"employee details",
                data:data
            })
        }
    })
}
module.exports.loginEmployee=(req,res)=>{
    console.log(x)
    let otp = req.params.id;
    if(x==otp){
        const employee = new employeeSchema(req.body)
        employee.save((err,data)=>{
                if(err){
                    
                    res.status(500).json({
                        message:"Error Occured because of same employee",
                    })
                }
                else{
                    mailer.sendMail(employee.email)
                    res.status(201).json({
                        message:"Employee Added Successfully",
                        data:data
                    })
                }
        
            })
        console.log("matched")
    }
    else{
        res.status(500).json({
            message:"Error Occured",
        })
    }
}