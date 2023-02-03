const express=require('express')
const router=express.Router()

const timetablecontroller=require('../controller/TimeTableController')

router.post('/addtt',timetablecontroller.addTime)
router.get('/getdata',timetablecontroller.getTime)

module.exports=router;