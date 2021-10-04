import express from "express";
import passport from "passport";

import multer from "multer";


// Database models
import { ImageModel } from '../../database/allmodels';

const Router = express.Router();

// utilities
import { s3Upload } from "../../Utils/AWS/s3";

// multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


// Routes
/*
Route           /
Des             upload to S3 bucket and saves files the link to mongo db
Params          none
Access          Public
Method          POST

*/

Router.post("/", upload.single("file") ,async (req,res)=>{
  try {
      const file = req.file;


    //   s3 bucket options
      const bucketOptions ={
          Bucket : "zomatoimagecontainer",
          Key : file.originalname,
          Body : file.buffer,
          ContentType : file.mimetype,
          ACL : "public-read",  //access control list
        
      };

    
      const uploadImage = await s3Upload(bucketOptions);
      await ImageModel.create({image:[{location:uploadImage.Location}]});
      return res.status(200).json({uploadImage});
  
      
  } catch (error) {
      return res.status(500).json({error:error.message })
  }
});

export default Router;