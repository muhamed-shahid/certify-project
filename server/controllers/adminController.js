const user = require("../models/User")

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

exports.updateCompanyStaus = async (req,res)=>{
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
        await company.save()

        res.status(200).json({
            success:false,
            message:`Company ${status.toLoweCase()} successfully`,
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