const Certificate = require("../models/Certificate")
const certificate = require("../models/Certificate")

exports.verifyCertificate = async (req,res)=>{
    try{
        const {certificateNumber} = req.body

        if(!certificateNumber){
            return res.status(400).json({
                success: false,
                message:"Certificate number is required"
            })
        }

         const certificate = await Certificate.findOne({ certificateNumber })

    if (!certificate){
        return res.status(404).json({
            success:false,
            message:"Certificate not found"
        })
    }

     if (certificate.status!=="ACTIVE"){
        return res.status(400).json({
            success:false,
            message:"Certificate is revoked"
        })
    }

    res.status(200).json({
        success:true,
        message:"Certificate is valid",
        data:certificate,
    })
    }

    catch(err){
        res.status(500).json({
            success:false,
            message:"Server error...!"
        })
    }

   


}