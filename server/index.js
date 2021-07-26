import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const zomato = express();

// application middleware
zomato.use(express.json());
zomato.use(cors());
zomato.use(helmet());

zomato.get("/", (req,res)=> res.json({"message":"Setting up is done successfully!!!!"}))

zomato.listen(4000, () => console.log("Server is running!!"));
