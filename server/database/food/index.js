import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
  isVeg: {type:Boolean,required:true},
  isContainedEgg: {type:Boolean,required:true},
  category: {type:String, required:true},
  photos:{
      type:mongoose.Types.ObjectId,
      ref: "Images"
  },
  price: {type:Number, default:150, required:true},
  addOns:[
       {
        type: mongoose.Types.ObjectId,
        ref: "Foods"
    }],
  restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurants",
      required: true
  }
},
{
  timestamps: true,    // has 2 properties 1.createdAt 2.updatedAt
});

export const FoodModel = mongoose.model("Foods", FoodSchema);  //model takes up (collection,schema)