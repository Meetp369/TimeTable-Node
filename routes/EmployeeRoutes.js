const express=require('express');
const router=express.Router();

const employeeController=require('../controller/EmployeeController');

// router.post('/addemp',employeeController.addEmployee)
router.get('/getemp',employeeController.getAllEmployee)
router.post('/emailsend',employeeController.addEmployee)
router.post('/addemp/:id',employeeController.loginEmployee)
module.exports=router;