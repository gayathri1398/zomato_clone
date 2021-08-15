import express from 'express';
import passport from 'passport';

// Database Models
import { ReviewModel } from '../../database/reviews';

const Router = express.Router();

/*
Route            /food/new
Des             add new review/rating
params          none
body            review Object
Access          Public
Method          POST
*/

Router.post("/food/new", async(req,res)=>{
    try {
        const {reviewData} = req.body;
         await ReviewModel.create(reviewData);  //not returning anything so need not name it with const
        return res.status(200).json({review: "Successfully created review"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});

