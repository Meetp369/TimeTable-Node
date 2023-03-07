const express = require("express");

const router = express.Router();
const dynamicFormController = require("../controller/DynamicFormController");
router.put('/add',dynamicFormController.addMultipleObj);
module.exports = router;