const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors=require('cors');

const departmentRoutes=require('./routes/DepartmentRoutes');
const ProductRoutes=require('./routes/ProductRoutes');
const employeeRoutes=require('./routes/EmployeeRoutes')
const cartRoutes=require('./routes/CartRoutes');
const ttroutes=require('./routes/TimeTableRoutes');
const dynaimcRoutes=require("./routes/DynamicFormROutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();

app.use('/dept',departmentRoutes);
app.use('/product',ProductRoutes);
app.use('/emp',employeeRoutes);
app.use('/cart',cartRoutes);
app.use('/tt',ttroutes);
app.use('/dform',dynaimcRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT)
});

mongoose.connect("mongodb+srv://meetpatel:meetpatel@cluster0.p6eubgg.mongodb.net/users?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  },(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Connected to database");
    }
  })
