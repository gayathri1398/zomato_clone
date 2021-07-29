
// Libraries
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//Models 
import { UserModel } from "../../database/user";     //WP-2

const Router = express.Router();                     //WP-1

// Route
/*
Route           /signup
Des             signup with email and password
Params          none
Access          Public
Method          POST
*/

Router.post("/signup",async (req,res)=> {
try {
    // const user = req.body.credentials;
    
    await UserModel.findByEmailAndPhone(req.body.credentials);

    //  save to DB
    const newUser = await UserModel.create(req.body.credentials);                                        //WP-6 


    // generate a jwt token
    const token = newUser.generateJwtToken();

    // return the token
    return res.status(200).json({token, status:"success"});

} catch (error) {
    return res.status(500).json({error:error.message });
}
});

export default Router;