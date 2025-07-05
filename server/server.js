require("dotenv").config() // ⬅️ .env file load karo
const express = require("express")
const cors=require("cors")
const app = express()
const authRoute = require("./routes/auth-router") // ⬅️ Routes include karo
const internshipRoute = require("./routes/internship-route");
// const contactRoute=require("./routes/contact-router")
// const serviceRoute=require("./routes/service-router")
const connectdb = require("./utils/db")
const errormiddleware = require("./middlewares/error-middleware")

const coreOptions={
  origin:"http://localhost:5173",
  methods:"GET , POST , PUT , DELETE, PATCH ,HEAD",
  credentials:true
}
app.use(cors(coreOptions))

app.use(express.json()) 
app.use("/api/auth", authRoute) 
app.use("/api", internshipRoute);
// app.use("/api/form",contactRoute)
// app.use("/api/data",serviceRoute)
app.use(errormiddleware)

const PORT = 5000;
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
  })
})
