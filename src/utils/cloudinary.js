import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


    cloudinary.config({ 
        cloud_name: process.env.COLUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });
    
    const uploadOnCloudnary=async (localFilePath)=>{
       try{
         if(!localFilePath) return null;
         const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
         })
         conaole.log("File is upload on cloudnary",response.url);
         return response;
       } catch(error){
            fs.unlinkSync(localFilePath)  //remove the locally saved temporary file s the upload operation got failed 
            return null;
       }
    }


    export {uploadOnCloudnary}