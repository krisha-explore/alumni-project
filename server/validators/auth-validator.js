const {z}=require("zod");

const loginSchema=z.object({
    email: z
    .string({ required_error: "SCET Email is required" })
    .trim()
    .email()
   .regex(/^[a-z]+\.(it|ai|co)\d{2}@scet\.ac\.in$/, {
      message: "Email must be in the format: name.branchyear@scet.ac.in",
    }),
    
     password:z
    .string({required_error:"Password is required"})
   
    .min(6,{message:"Password must be at least 6 characters"})
    .max(1024,{message:"Password can not be greater than 1024  characters"})

    
})

const signupSchema=loginSchema.extend({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 char"})
    .max(255,{message:"Name must not be more than 255 characters"}),

   
   

   
})

module.exports={signupSchema,loginSchema}