const mongoose = require("mongoose")

const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },

    password:{
        type:String,
        required:true,
    },


    role:{
        type:String,
        enum:["ADMIN","UNIVERSITY","COMPANY"],
        required:true,
    },


    status:{
        type:String,
        enum:["PENDING","APPROVED","REJECTED"],
        default:"PENDING",
    },

    rejectionReason:{
        type:String,
        default:"",
    }
},
{timestamps:true}
)

module.exports = mongoose.model("User",UserSchema)