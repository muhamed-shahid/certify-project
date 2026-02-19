const Company = require("../models/Company")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")





exports.loginCompany = async (req,res)=>{
    try{
        const {email,password} = req.body


        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"Email and password are required",

            })
        }
             const company = await Company.findOne({email})

        if(!company){
            return res.status(400).json({
                success:false,
                message:"Company not found",
            })
        }

        if(company.status!=="APPROVED"){
            return res.status(401).json({
                success:false,
                message:"Company not approved yet"
            })
        }
        const isMatch = await bcrypt.compare(password,company.password)

        if (!isMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid credentials",
            })
        }

        const token = jwt.sign({
            id:company._id,
            role:"company"
        },process.env.JWT_SECRET,{expiresIn:"1d"})


        res.status(200).json({
            success:true,
            message:"Login successfull",
            token,
            company:{
                id:company._id,
                companyName: company.companyName,
                email: company.email,
            },
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Server error"
        })
        
    }
}



exports.registerCompany = async (req,res)=>{
    try{
        const{companyName,email,password} = req.body


        if(!companyName.trim()||!email.trim()||!password.trim())
        {
            return res.status(400).json({
                success:true,
                message:"All fields are required",
            })
        }


        const existingCompany = await Company.findOne({email})

        if(existingCompany){
            return res.status(401).json({
                success:false,
                message:"Email already registered",
            })
        }


        const hashedPassword = await bcrypt.hash(password,10)


        const newCompany = new Company({
            companyName,
            email,
            password:hashedPassword,
            status:"PENDING",
        })

        await newCompany.save()


        res.status(201).json({
            success:true,
            message:"Registration successfull await admin approval"
        })
    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            message:"Server error",
        })
        
    }
}