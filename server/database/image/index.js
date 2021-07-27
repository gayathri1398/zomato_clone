import mongoose from "mongoose";

// schema
const ImageSchema = new mongoose.Schema({
    image:[{location: {type:String, required:true}}]
},
{
    timestamps: true,
});

export const ImageModel = mongoose.model("Images", ImageSchema);