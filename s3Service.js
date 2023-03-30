const { S3 } = require("aws-sdk")
const uuid = require("uuid").v4;
const AWS=require("aws-sdk")
exports.s3Uploadv2 = async (file) => {

    var s3 = new S3({
        secretAccessKey: process.env.AWS_SECRET_KEY,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        region: process.env.AWS_REGION
      });
 
    
    const param = {
        Bucket: process.env.AWS_BUKET_NAME,
        Key: `uploads/${uuid()}-${file.originalname}`,
        Body:file.buffer,
    }
    return await s3.upload(param).promise()
}