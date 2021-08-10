// Importing env variables
require ('dotenv').config();

// Libraries
import express from 'express';
import cors from 'cors';                  //WP-10
import helmet from 'helmet';
import passport from 'passport';


// connection DB
import ConnectDB from './database/connection';

// configs
import googleAuthConfig from './config/google.config'

// microservice routes
import Auth from "./API/Auth"
import Restaurant from "./API/Restaurant";
 

const zomato = express();

// application middleware
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}))
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration
googleAuthConfig(passport);


// application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);

zomato.get("/", (req,res)=> res.json({"message":"Setting up is done successfully!!!!"}));

zomato.listen(4000, ()=> {
    ConnectDB()
    .then(()=> console.log("Server is running successfully!"))
    .catch(()=> console.log("Server is running but the database is not connected!"))
});
