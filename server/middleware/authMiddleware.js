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