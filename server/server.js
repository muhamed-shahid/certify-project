
//test change
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const certificateRoutes = require("./routes/certificateRouter")
const app= express()

app.use(cors());
app.use(express.json());
app.use("/api/certificates",certificateRoutes)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connected");
    
})


app.listen(process.env.PORT,()=>{
    console.log("Server running on port",process.env.PORT);
    
})

.catch((err)=>{
    console.log(err);
    
})