import express from 'express';
import passport from 'passport';

const Router = express.Router();


// Database Models
import {RestaurantModel}from "../../database/allmodels";


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
        const {searchString} = req.body;
        const restaurants = await RestaurantModel.find({name: {$regex : searchString , $options: "i" }});
        if(!restaurants)
           return res.status(404).json({error: `${searchString} does not match any of the restaurants`});
        return res.json({restaurants});
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
   

});

export default Router;
