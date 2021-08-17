import express from 'express';
import passport from 'passport';

// Database Models
import { ReviewModel } from '../../database/reviews';

const Router = express.Router();

/*
Route            /new
Des             add new review/rating
params          none
body            review Object
Access          Public
Method          POST
*/

Router.post("/new", async(req,res)=>{
    try {
        const {reviewData} = req.body;
         await ReviewModel.create(reviewData);  //not returning anything so need not name it with const
        return res.status(200).json({review: "Successfully created review"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});



/*
Route            /delete
Des              delete a review using the review id
Params           _id
Access           Public
Method           DELETE
*/

Router.delete("/delete:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
         await ReviewModel.findByIdAndDelete(_id); 
        return res.status(200).json({reviews: "Successfully deleted the review"});  
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
    
});

export default Router;