import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { mongoDBURL, PORT } from './config.js';
import vehicleRoutes from './routes/vehicleRoutes.js'

// define app
const app=express();

// middleware for parsing request body
app.use(express.json())

// to handle cors policies in frontend.without cors allowed not allowed to run in the frontend
app.use(cors())

// connect the vehicle routers
app.use('/vehicle',vehicleRoutes)

// connect with db and listen to port
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("Successfully connect with DB")
        app.listen(PORT,()=>{
            console.log(`App is listening port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })