const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true,
    },
    phoneNo : {
        type:String,
        required: true,
    },
    date : {
        type:String,
        required: true,
    }
})

// crete collection..
const AppForm = new mongoose.model("AppForm", formSchema);

module.exports = AppForm;