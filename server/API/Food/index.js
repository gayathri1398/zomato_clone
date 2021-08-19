import express from 'express';
import passport from 'passport';

const Router = express.Router();


// validation
import { ValidateCategory, ValidateRestaurantId } from '../../Validation/food';


// Database models
import {FoodModel} from "../../database/allmodels";




// routes
/*
Route           /r
Des            get all food based on particular restaurant
Params         id
Access         Public
Method         GET

*/

Router.get("/r/:_id", async(req,res)=>{
    try {
        await ValidateRestaurantId(req.params);
        const  {_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});
        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

/*
Route          /c
Des            get food based on category
Params         category
Access         Public
method         GET

*/

Router.get("/c/:category", async(req,res)=>{
    try {
        await ValidateCategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({category:{$regex: category , $options: "i"}});
        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   

});


export default Router;