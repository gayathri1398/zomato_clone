
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
    const {email, password, fullname, phonenumber} = req.body.credentials;

    // check whether email exists
    const checkUserByEmail  =  await UserModel.findOne({email});
    const checkUserByPhone  =  await UserModel.findOne({phonenumber});

    if (checkUserByEmail || checkUserByPhone){
        return res.json({error: "User Already Exists!"})
    };


    // hash the password
     const bcryptSalt = await bcrypt.genSalt(8);  // 8- rounds      //WP-4
    
     const hashedPassword = await bcrypt.hash(password, bcryptSalt);
   
    //  save to DB
    await UserModel.create(                                         //WP-6
        {...req.body.credentials,
        password:{hashedPassword}
    });


    // generate a jwt token
    const token = jwt.sign({user: {fullname, email}}, "ZomatoAPP");

    // return the token
    return res.status(200).json({token, status:"success"});

} catch (error) {
    return res.status(500).json({error:error.message })
}
})

export default Router;