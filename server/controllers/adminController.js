const user = require("../models/User")
const certificates = require("../models/Certificate")
exports.allCompanies = async (req,res)=>{
    try{
        const companies = await user.find({role:"COMPANY"})
        return res.status(201).json({
            success:true,
            data:companies,
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Server error",
        })
        
    }
}

exports.updateCompanyStatus = async (req,res)=>{
    try{
        const {id}=req.params
        const { status } = req.body
        const allowedStatus = ["APPROVED","REJECTED"]
        if(!allowedStatus.includes(status)){
            return res.status(401).json({
                success:false,
                message:"Invalid status value",
            })

        }


        const company = await user.findById(id)

        if(!company){
            return res.status(402).json({
                success:false,
                message:"Company not found",
            })
        }

        if(company.role !== "COMPANY"){
            return res.status(403).json({
                success:false,
                message:"User is not a company",

            })


        }


        company.status = status

         if (status === "REJECTED") {

      company.rejectionReason =
        reason && reason.trim() !== ""
          ? reason
          : "No reason provided";

    } else {

      // clear reason if approved
      company.rejectionReason = "";

    }
        await company.save()

        res.status(200).json({
            success:false,
            message:`Company ${status.toLowerCase()} successfully`,
            data: company,
        })
    } catch (err){
        console.error(err);
        
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}


exports.allUniversities = async (req,res)=>{
   try{
     const universities = await user.find({role:"UNIVERSITY"})
    return res.status(201).json({
        success:true,
        data:universities,
    })
   }catch(err){
    console.error(err);
    res.status(500).json({
        success:false,
        message:"Server error",
    })
    
   }
}




exports.updateUniversityStatus = async (req,res) =>{
    try{
        const {id} = req.params

        const { status,reason } = req.body
        const allowedStatus = ["APPROVED","REJECTED"]
        if(!allowedStatus.includes(status)){
            return res.status(401).json({
                success:false,
                message:"Invalid status value",
            })

        }

        const university = await user.findById(id)

        if(!university){
            return res.status(404).json({
                success:false,
                message:"University not found",
            })
        }


        if(university.role !== "UNIVERSITY"){
            return res.status(403).json({
                success:false,
                message:"User is not a university"

            })
        }

        university.status = status

         if (status === "REJECTED") {

      university.rejectionReason =
        reason && reason.trim() !== ""
          ? reason
          : "No reason provided";

    } else {

      // clear reason if approved
      university.rejectionReason = "";

    }
        await university.save()

        res.status(200).json({
            success:true,
            message:`University ${status.toLowerCase()} successfully`,
            data:university
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Server error",
        })
        
    }
}


exports.adminDash = async (req,res) =>{
    try{
        const universityCounts = await user.countDocuments({
            role:"UNIVERSITY"
        })

        const companyCounts = await user.countDocuments({
            role:"COMPANY"
        })

        const certificateCounts = await certificates.countDocuments()

        res.status(200).json({
            success:true,
            data:{
                universities:universityCounts,
                companies:companyCounts,
                certificates:certificateCounts,
            }
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Server error"
        })
        
    }
}