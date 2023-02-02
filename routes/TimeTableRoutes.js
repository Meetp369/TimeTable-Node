const express=require('express')
router=express.Router()
const timetablecontroller=require('../controller/TimeTableController')

router.post('/tt',timetablecontroller.addTime)
module.exports=router;