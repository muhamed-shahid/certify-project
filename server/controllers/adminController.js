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