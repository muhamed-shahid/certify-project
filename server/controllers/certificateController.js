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

exports.revokeCertificate = async (req,res)=>{
    try{
        const {id} = req.params

        const certificate = await Certificate.findById(id)

        if (!certificate){
            return res.status(404).json({
                success: false,
                message:"Certificate not found"
            })
        }

        if(certificate.status === "REVOKED"){
            return res.status(400).json({
                success: false,
                message:"Certificate already revoked"
            })
        }

        certificate.status = "REVOKED"
        await certificate.save()

        res.status(200).json({
            success:true,
            message:"Certificates revoked successfully",
            data:certificate,
        })
    }
    catch (error){
        res.status(500).json({
            success:false,
            message:"Server error",
        })
    }
}


exports.allCertficates = async (req,res)=>{
    try{
        const certificates = await Certificate.find()
        res.status(200).json(certificates)
    }catch(error){
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Server error",
        })
    }
}

exports.addCertificate = async (req,res)=>{
    try{
        const {
            certificateNumber,
            studentName,
            courseName,
            universityName,
            issueDate,
        } = req.body;


         if(!certificateNumber || !studentName || !courseName ||!universityName ||!issueDate){
           return res.status(400).json({
            success:false,
            message:"All fields are required",
           })
    }

    const existing = await Certificate.findOne({certificateNumber})
    if (existing){
        return res.status(400).json({
            success:false,
            message:"Certificate number already exists"
        })
    }


    const newCertificate = new Certificate({
        certificateNumber,
        studentName,
        courseName,
        universityName,
        issueDate,
        status:"ACTIVE",
    })

    await newCertificate.save()

    res.status(201).json({
        success:true,
        message:"Certificate added successfully",
        data: newCertificate,
    })
    }

    catch (err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }

   
}