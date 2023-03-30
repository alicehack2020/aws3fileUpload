const { S3 } = require("aws-sdk")
const uuid = require("uuid").v4;
const AWS=require("aws-sdk")
exports.s3Uploadv2 = async (file) => {

    var s3 = new S3({
        secretAccessKey: process.env.AWS_SECRET_KEYX,
        accessKeyId: process.env.AWS_ACCESS_KEY_IDX,
        region: process.env.AWS_REGIONX
      });
 
    
    const param = {
        Bucket: process.env.AWS_BUKET_NAMEX,
        Key: `uploads/${uuid()}-${file.originalname}`,
        Body:file.buffer,
    }
    return await s3.upload(param).promise()
}