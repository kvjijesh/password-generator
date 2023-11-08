import express, { Router } from 'express'
const app=express()
import dotenv from "dotenv"
import {connect} from './config/dbConnect.js';
dotenv.config();
connect()
const PORT=3000;
const router=express.Router()
router.post('/save',async(req,res)=>{
    

})


app.listen(PORT,console.log(`Server running on${PORT}`))