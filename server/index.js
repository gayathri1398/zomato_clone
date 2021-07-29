// Importing env variables
require ('dotenv').config();

// Libraries
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// connection DB
import ConnectDB from './database/connection';

// microservice routes
import Auth from "./API/Auth"


const zomato = express();

// application middleware
zomato.use(express.json());
zomato.use(cors());
zomato.use(helmet());

// application routes
zomato.use("/auth", Auth);

zomato.get("/", (req,res)=> res.json({"message":"Setting up is done successfully!!!!"}));

zomato.listen(4000, ()=> {
    ConnectDB()
    .then(()=> console.log("Server is running successfully!"))
    .catch(()=> console.log("Server is running but the database is not connected!"))
});
