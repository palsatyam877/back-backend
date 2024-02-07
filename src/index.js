// import mongoose, { connect } from 'mongoose'
// import { DB_NAME } from './constants'
import connectDB from './db/index.js'
import dotenv from 'dotenv'
import  {app}   from  './app.js'

dotenv.config({
    path : './env'
})

connectDB()
.then( () => {
     app.on( error , () => {
         console.log(`Db connection failed !!`);
         throw error;
     } );

     app.listen(process.env.PORT || 8000 , () => {
        console.log(`App is listening on port : ${process.env.PORT}`);
     })
} )
.catch((error) => {
    console.log(`Db connection failed !` , error);
});















/*
import express from 'express'
const app = express()

;(async () => {
     try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error" , (error) => {
            console.log("ERROR : " , error);
            throw error
        });

        app.listen(process.env.PORT , () => {
            console.log(`Process is listening on ${process.env.PORT}`);
        } )
     } catch(error) {
         console.error("ERROR : " , error);
     }
})()

*/