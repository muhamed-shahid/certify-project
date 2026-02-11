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

    universityName:{
        type: String,
        reuired: true,
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