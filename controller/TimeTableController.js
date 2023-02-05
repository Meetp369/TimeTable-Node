const timetableSchema=require('../model/TimeTableSchema');
module.exports.addTime=(req,res)=>{
    var tt = new timetableSchema(req.body);
    console.log(tt)
    tt.save((err, data) => {
        if (err) {
          res.status(501).json({
            message: "error occured",
          });
        } else {
          res.status(201).json({
            message: "tt added",
            data: tt,
          });
        }
      });
}
module.exports.getTime=(req,res)=>{
  timetableSchema.find((err,data)=>{
    if(err){
      res.status(501).json({
        message:"error occured",
        err:err
      })
    }else{
      res.status(201).json({
        message:"details time table",
        data:data
      })
    }
  })
}
module.exports.updateTime=(req,res)=>{
  let id=req.params.id;
  timetableSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
    if(err){
      res.status(500).json({
        message:"error occured"
      })
    }else{
      res.status(200).json({
        message:"timetable updated",
        data:data
      })
    }
  })
}