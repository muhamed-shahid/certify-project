const mongoose = require("mongoose")

const CompanySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },
    email : {
        type: String,
        required: true,
        unique : true,
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","APPROVED","REJECTED"],
        default:"PENDING",
    },

},
{timestamps:true})


module.exports = mongoose.model("Company",CompanySchema)