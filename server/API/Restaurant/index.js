import express from 'express';
import passport from 'passport';

// Database Models
import {RestaurantModel}from "../../database/allmodels";

// validation
import { ValidateRestaurant, ValidateSearchString } from '../../Validation/restaurant';
import { ValidateRestaurantId } from '../../Validation/food';

const Router = express.Router();

// route
/*
Route           /
Des            Get all the restaurant based on a city
Params         none
Access         Public
Method         GET
*/

Router.get("/", async(req,res)=>{
    try {
        await ValidateRestaurant(req.query);
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    };
});
 

/*
Route           /
Des             get a restaurant based on id
Params          id
Access          Public
Method          GET
 */

Router.get("/:_id", async(req,res)=>{
    try {
        await ValidateRestaurantId(req.params);
        const {_id}  = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant)
           return res.status(404).json({error: "Restaurant not found"})
        return res.json({restaurant});   
    } catch (error) {
        return res.status(500).json({error:error.message});
    };

});



/*
Route           /search
Des             get the restaurant based on the search string
Params          none
Body            searchString
Access          Public
Method          GET
*/
Router.get("/search", async(req,res)=>{
    try {
        await ValidateSearchString(req.body);
        const {searchString} = req.body;
        const restaurants = await RestaurantModel.find({name: {$regex : searchString , $options: "i" }});
        if(!restaurants)
           return res.status(404).json({error: `${searchString} does not match any of the restaurants`});
        return res.json({restaurants});
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
   

});

/*
Route        /
Des          Post the restaurant details
Params       new
Access       Private
Method       POST

*/

Router.post("/new", async(req,res)=>{
    try {
        const newRestaurant = await RestaurantModel.create(req.body.restaurantData);
        return res.json({restaurants: newRestaurant});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});


/*
Route            /
Des             Update the restaurant objects
Params          update
Access          Private
Method          PATCH
*/

Router.patch("/update", async(req,res)=>{
    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
        req.body.restaurantData._id,
        {$set: req.body.restaurantData},
        {new:true});
    if (!updatedRestaurant){
        return res.status(400).json({restaurants: "No Restaurant found!!"});
    }
    return res.json ({restaurant:updatedRestaurant })
})



export default Router;
