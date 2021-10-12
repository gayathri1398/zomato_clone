import express from 'express';
import passport from 'passport';

// validation
import { ValidateReview ,ValidateReviewId} from '../../Validation/review';

// Database Models
import { ReviewModel } from '../../database/reviews';


const Router = express.Router();

/*
Router        /
Des           get all the reviews
Params        restId
Access        public
Method        GET
*/

Router.get("/:resId",async(req,res)=>{
    try {
        const reviews =await ReviewModel.find({restaurant:req.params.resId});
        return res.json({reviews})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});



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
        await ValidateReview(req.body);
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
        await ValidateReviewId(req.params);
        const {_id} = req.params;
         await ReviewModel.findByIdAndDelete(_id); 
        return res.status(200).json({reviews: "Successfully deleted the review"});  
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
    
});

export default Router;