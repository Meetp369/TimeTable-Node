const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const timetableSchema=Schema({
    name:{
        type:String,
        required:true
        
    },
    timetable:[{
        day:{
            type:String,
            require:true
        },
        time:[{
            type:String
        }],
        avability:[{
            type:Boolean
        },]
        
        
    },]
})
module.exports=mongoose.model("TimeTable",timetableSchema);