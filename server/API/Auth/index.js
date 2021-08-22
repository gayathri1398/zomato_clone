
// Libraries
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//Models 
import { UserModel } from "../../database/user";     //WP-2
import passport from "passport";

// validations
import { ValidateSignin, ValidateSignup } from "../../Validation/auth";


const Router = express.Router();                     //WP-1

// Route
/*
Route           /signup
Des             Register 
Params          none
Access          Public
Method          POST
*/

Router.post("/signup",async (req,res)=> {
try {
    await ValidateSignup(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);                                        //WP-6 
    const token = newUser.generateJwtToken();

    // return the token
    return res.status(200).json({token, status:"success"});

} catch (error) {
    return res.status(500).json({error:error.message });
}
});

// Route
/*
Route           /signin
Des             signin with email and password
Params          none
Access          Public
Method          POST
*/

Router.post("/signin",async (req,res)=> {
    try {
        await ValidateSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
    
        // return the token
        return res.status(200).json({token, status:"success"});
    
    } catch (error) {
        return res.status(500).json({error:error.message });
    }
    });

    /*
Route           /google
Des             google signin
Params          none
Access          Public
Method          GET
*/

Router.get("/google",
 passport.authenticate("google", 
   {scope: ["https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"]}
            ));


   /*
Route           /google/callback
Des             google signin callback
Params          none
Access          Public
Method          GET
*/

Router.get("/google/callback",
   passport.authenticate("google", {failureRedirect:"/"}), (req,res)=>{
       return res.json({token: req.session.passport.user.token})
   });


export default Router;