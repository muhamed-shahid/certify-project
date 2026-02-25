const User = require("../models/User")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")

exports.register = async (req,res)=>{
    try{
        const{name,email,password,role} = req.body

        if(!name||!email||!password||!role){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }

        const existing = await User.findOne({email})


        if(existing){
            return res.status(401).json({
                success:false,
                message:"This email already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = new User({
            name,
            email,
            password:hashedPassword,
            role,
            status:"PENDING",
        })

        await user.save()

        res.status(200).json({
            success:true,
            message:"Registration successfull"
        })
    }catch(err){
        console.error(err);
        
         res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}



exports.login = async (req,res)=>{
    try{
        const {email,password,role} = req.body
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found",
            })
        }


        if(user.role !== role){
            return res.status(403).json({
                success:false,
                message:"invalid login portal"
            })
        }

        if(user.status !== "APPROVED"){
            return res.status(401).json({
                success:false,
                message:"Account not approved yet",
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)


        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }

        const token = jwt.sign(
            {id:user._id,role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )

        res.status(201).json({
            success:true,
            message:"Login successfull",
            token,
            role:user.role,
            
        })
    }catch(err){
        console.error(err);

        res.status(500).json({
            success:false,
            message:"Server error",
        })
        
    }
}







