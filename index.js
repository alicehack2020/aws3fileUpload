const multer = require("multer")
var cors = require("cors");

const express=require("express")
const { s3Uploadv2 } = require("./s3Service")
require('dotenv').config()
const app = express()

 

app.use(cors())

const storage=multer.memoryStorage()
const PORT=process.env.PORT
const upload = multer({ storage })
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file
    const result = await s3Uploadv2(file)
     res.json({ status: "success", data: result.Location }) 
  } catch (error) {
    console.log(error)  
  }
})
app.get("/", (req, res) => {
  res.send({data:"welcome"})
})

app.listen(PORT, () => {
    console.log("server started")
})

