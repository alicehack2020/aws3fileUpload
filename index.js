const multer = require("multer")
var cors = require('cors');

const express=require("express")
const { s3Uploadv2 } = require("./s3Service")
require('dotenv').config()
const app = express()
app.use(cors())

const storage=multer.memoryStorage()

const upload = multer({ storage })
app.post("/upload",upload.single("file"),async(req, res) => {
    try {
    const file = req.file
    const result = await s3Uploadv2(file)
    res.json({ status: "sucess",data:result.Location}) 
    }
    catch (error) {
      console.log(error)  
    }
   
})

app.listen(4000, () => {
    console.log("server started")
})

