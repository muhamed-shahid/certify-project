const jwt = require("jsonwebtoken")

exports.protect = (req,res,next)=>{ 
    const token = req.headers.authorization?.split(" ")[1]
    
    if(!token){
        return res.status (400).json({
            success:false,
            message:"Not authorized"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Invalid token"
        })
        
    }
}


exports.adminOnly = (req,res,next)=>{
    if(req.user.role !== "ADMIN"){
        return res.status(401).json({
                success:false,
                message:"Access denied. Admin only",
            })
    }
    next()
}