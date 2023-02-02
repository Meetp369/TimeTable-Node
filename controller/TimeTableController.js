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