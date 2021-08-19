import express from "express";
import passport from "passport";

// validation
import { ValidateUserId } from "../../Validation/order";
import { ValidateUpdatedUserDetails } from "../../Validation/user";

// Database models
import { UserModel } from "../../database/user";



const Router = express.Router();

//Routes
/*
Route            /
Des             get the user details through userId
Params          _id
Access         Public
Method         GET

*/

Router.get("/:_id",async(req,res)=>{
    try {
        await ValidateUserId(req.params)
        const {_id} =  req.params;
        const {getUser} = await UserModel.findById(_id) ;
        return res.json({user:getUser});
        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
});

/*
Route                /update
Des                 Updating the user data
Params              _id
Access              Public
Method              PUT
*/

Router.put("/update",async(req,res)=>{
 try {
     await ValidateUserId(req.params);
    await ValidateUpdatedUserDetails(req.body);
    const {_id}= req.params;
    const {userData} = req.body;
    const updateUserData =await UserModel.findByIdAndUpdate(
            _id,
            {$set: userData},
            {new:true});
    return res.json({user :updateUserData});
 } catch (error) {
     return res.status(500).json({error:error.message});
 }
});

export default Router;