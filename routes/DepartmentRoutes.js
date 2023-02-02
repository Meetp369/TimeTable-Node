const express = require("express");

const router = express.Router();
const departmentController = require("../controller/DepartmentControoller");
router.post('/department',departmentController.addDepartment)
module.exports = router;