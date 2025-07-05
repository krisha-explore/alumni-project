const User = require("../model/user-model")
const bcrypt=require("bcryptjs")

const home = async (req, res) => {
  try {
    res.status(200).send(" hello krisha welcome to backend using router again")
  } catch (error) {
    console.log(error)
  }
}
//register logic
const signup = async (req, res) => {
  try {
    console.log(req.body)
    const { username, email, password } = req.body

    const userExist = await User.findOne({ email }) // Check duplicate
    if (userExist) {
      return res.status(400).json({ message: "email already exist" })
    }

    //hash password valu logic userschema ma che...

    const usercreated = await User.create({ username, email, password  }) // Save new user
    res.status(201).json({
  msg: "Registration successful",
  token: await usercreated.generateToken(),
  user: {
    _id: usercreated._id,
    username: usercreated.username,
    email: usercreated.email
  }
});
  } catch (error) {
    console.error("Signup error:", error); 
    res.status(500).json("internal server error")
  }
}

//login logic 

const login=async (req,res)=>{
  try {
    const {email,password}=req.body
    const userExist=await User.findOne({email})
    if(!userExist){
      return res.status(400).json({message:"invalid"})
    }

    // const user=await bcrypt.compare(password,userExist.password);
    const user=await userExist.comparePassword(password);
    if(user){
     res.status(200).json({
  msg: "Login Succesful",
  token: await userExist.generateToken(),
  user: {
    _id: userExist._id,
    email: userExist.email,
    username: userExist.username
  }
});
    }else{
      res.status(401).json({message:"invalid email or password"})
    }
  } catch (error) {
      // res.status(500).json("internal server error")
      next(error)
  }
}
const user=async (req,res)=>{
   try {
    const userdata=req.user;
    console.log(user)
    return res.status(200).json({userdata})
   } catch (error) {
    console.log(error)
   }
}

module.exports = { home, signup ,login,user}
