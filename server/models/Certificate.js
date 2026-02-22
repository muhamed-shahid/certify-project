const mongoose=require('mongoose')

const certificateSchema= new mongoose.Schema({
    certificateNumber:{
        type:String,
        required: true,
        unique: true,
    },


    studentName:{
        type: String,
        reuired: true,
    },


    courseName:{
        
        type: String,
        reuired: true,
    
    },

    university:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },

    issueDate:{
        type:Date,
        required: true,
    },


    status:{
        type:String,
        enum:["ACTIVE","REVOKED"],
        default:"ACTIVE",
    },
    })

module.exports = mongoose.model("Certificate", certificateSchema)