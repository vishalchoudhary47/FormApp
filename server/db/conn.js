const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/MERNAPPLICcationForm").then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log("there is an error"+err);
});

