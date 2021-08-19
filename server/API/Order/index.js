import express from 'express';
import passport from 'passport';

// validation
import { ValidateUserId, ValidateOrderDetails } from '../../Validation/order';


// Database Model
import {OrderModel} from  '../../database/allmodels';


const Router = express.Router();

// Routes
/*
Route            /
Des             get all the orders based on id
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async(req,res)=>{
    try {
        await ValidateUserId(req.params);
     const {_id} = req.params;
     const {getOrders} = await OrderModel.findOne({user:_id});
     if (!getOrders)
        return res.status(404).json({error: "User not found"});
     return res.status(200).json({orders:getOrders }); 

    } catch (error) {
       res.status(500).json({error:error.message}) ;
    }
});


/*
Route            /new
Des              add new order
params           _id
Access           Public
Method           POST
*/
Router.post("/new/:_id", async(req,res)=>{
    try {
        await ValidateUserId(req.params);
        await ValidateOrderDetails(req.body);
        const {_id} = req.params;
        const {orderDetails} = req.body;

        const {addNewOrder} = await OrderModel.findOneAndUpdate(
            {
                user:_id
            },
            {
                $push: {orderDetails}    //same as{orderDetails:orderDetails}
            },
            {new:true}
            );
        return res.json({order : addNewOrder});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }


});


export default Router;




