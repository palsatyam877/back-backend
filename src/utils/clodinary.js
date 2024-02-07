import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCLoudinary = async (localFilePath) => {
        try {
           if(!localFilePath) return null;

           const response = cloudinary.uploader.upload(localFilePath , {
              resource_type : 'auto'
           })

           console.log("File uploaded on CLoudinary" , response.url);
           return response;
        } catch (error) {
            fs.unlinkSync(localFilePath);
            return null;
        }
}

export {uploadOnCLoudinary};


// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });