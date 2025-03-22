require('dotenv').config()
const { getSignedUrl } =require("@aws-sdk/s3-request-presigner") 

const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3Client = new S3Client({
  credentials: {
    accessKeyId,
    secretAccessKey
  },
  region:region
})

// uploads a file to s3
async function uploadFile(fileBuffer,imageName,fileMime) {
  const uploadParams = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key: imageName,
    ContentType:fileMime
  }
  const command =new PutObjectCommand(uploadParams)
  return await s3Client.send(command);
}
exports.uploadFile = uploadFile

 async function getObjectSignedUrl(key) {
  const params = {
    Bucket: bucketName,
    Key: key
  }
  const command = new GetObjectCommand(params);
  const seconds = 60
  const url = await getSignedUrl(s3Client, command, { expiresIn: seconds });
  return url
}
exports.getObjectSignedUrl = getObjectSignedUrl

async function getFile(key){
  const params = {
    Bucket:bucketName,
    Key:key
  }
  const command = new GetObjectCommand(params)
  const response = await s3Client.send(command)
  let fileContent = '';

    for await (const chunk of response.Body) {
      fileContent += chunk.toString();
    }

    const jsonData = JSON.parse(fileContent);
    return jsonData;
}
exports.getFile = getFile
function deleteFile(fileName) {
  const deleteParams = {
    Bucket: bucketName,
    Key: fileName,
  }

  return s3Client.send(new DeleteObjectCommand(deleteParams));
}
exports.deleteFile = deleteFile


// require('dotenv').config();
// const fs = require('fs');
// const path = require('path');
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");

// const bucketName = process.env.AWS_BUCKET_NAME;
// const region = process.env.AWS_BUCKET_REGION;
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID; // Corrected variable name
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY; // Corrected variable name

// // Check if AWS credentials exist
// const isS3Enabled = accessKeyId && secretAccessKey && bucketName && region;

// let s3Client = null;

// if (isS3Enabled) {
//   console.log("AWS S3 is enabled.");
//   s3Client = new S3Client({
//     credentials: { accessKeyId, secretAccessKey },
//     region: region,
//   });
// } else {
//   console.warn("AWS S3 is disabled. Running in local mode.");
// }

// // 📌 Local Storage Path
// const localStoragePath = path.join(__dirname, "..", "uploads");

// // Ensure uploads directory exists
// if (!fs.existsSync(localStoragePath)) {
//   fs.mkdirSync(localStoragePath, { recursive: true });
// }

// // 🟢 Upload a file (Supports both AWS and Local)
// async function uploadFile(fileBuffer, imageName, fileMime) {
//   if (!isS3Enabled) {
//     console.log(`Saving file locally: ${imageName}`);
//     const filePath = path.join(localStoragePath, imageName);
//     fs.writeFileSync(filePath, fileBuffer);
//     return { message: "File saved locally", filePath };
//   }

//   // Upload to S3
//   const uploadParams = {
//     Bucket: bucketName,
//     Body: fileBuffer,
//     Key: imageName,
//     ContentType: fileMime,
//   };

//   const command = new PutObjectCommand(uploadParams);
//   return await s3Client.send(command);
// }

// exports.uploadFile = uploadFile;

// // 🟢 Get Signed URL (Only for AWS)
// async function getObjectSignedUrl(key) {
//   if (!isS3Enabled) {
//     console.log(`Local mode: No signed URL for ${key}`);
//     return `http://localhost:5000/uploads/${key}`;
//   }

//   const params = { Bucket: bucketName, Key: key };
//   const command = new GetObjectCommand(params);
//   const seconds = 60;
//   return await getSignedUrl(s3Client, command, { expiresIn: seconds });
// }

// exports.getObjectSignedUrl = getObjectSignedUrl;

// // 🟢 Get File (Supports AWS and Local)
// async function getFile(key) {
//   if (!isS3Enabled) {
//     console.log(`Fetching local file: ${key}`);
//     const filePath = path.join(localStoragePath, key);
//     if (!fs.existsSync(filePath)) throw new Error("File not found locally");
//     return fs.readFileSync(filePath, "utf-8");
//   }

//   // Fetch from AWS S3
//   const params = { Bucket: bucketName, Key: key };
//   const command = new GetObjectCommand(params);
//   const response = await s3Client.send(command);

//   let fileContent = "";
//   for await (const chunk of response.Body) {
//     fileContent += chunk.toString();
//   }

//   return JSON.parse(fileContent);
// }

// exports.getFile = getFile;

// // 🟢 Delete File (Supports AWS and Local)
// function deleteFile(fileName) {
//   if (!isS3Enabled) {
//     console.log(`Deleting local file: ${fileName}`);
//     const filePath = path.join(localStoragePath, fileName);
//     if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//     return { message: "File deleted locally" };
//   }

//   // Delete from AWS S3
//   const deleteParams = { Bucket: bucketName, Key: fileName };
//   return s3Client.send(new DeleteObjectCommand(deleteParams));
// }

// exports.deleteFile = deleteFile;
