const jwt=require("jsonwebtoken")
const User=require("../model/user-model")

const authMiddleware=async (req,res,next)=>{  //aama next call krso to j route ma rahela authcontroller.user ma jase

    const token=req.header("Authorization")
    if(!token){
        return res.status(401).json({msg:"Unauthorized HTTP,Token not provided"})
    }
    
    
    //Bearer,removing bearer prefix
     const jwtToken=token.replace("Bearer","").trim() //using trim starting nd ending space remove kri dese
    console.log("token from auth-middleware",jwtToken);

   try {
    const isverified=jwt.verify(jwtToken,process.env.
JWT_SECRET_KEY)

const userdata=await User.findOne({email:isverified.email}).select({password:0})
console.log(userdata)
req.user=userdata;
req.token=token
req.userID=userdata._id

     next();
   } catch (error) {
    return res.status(401).json({msg:"Unauthorized. Invalid Token"})
   }

   
}

module.exports=authMiddleware;