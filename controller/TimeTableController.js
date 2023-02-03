const timetableSchema=require('../model/TimeTableSchema');
exports.addTime=(req,res)=>{
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
exports.getTime=(req,res)=>{
  timetableSchema.find((err,data)=>{
      if(err){
        res.status(500).json({
            message:"Error Occured",
            error:err
        })
      }
      else{
        res.status(200).json({
            message:"time table details",
            data:data
        })
      }
  })
}