// require('dotenv').config({path: "./env"})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import  {app} from "./app.js"

dotenv.config({
    path: './env'
})


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server us running on port : ${process.env.PORT}`);
        app.on('error',()=>{
            console.log("app not able to connect the db");
                throw error();
                
        })
    
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed")
})



























/*
import express from 'express'
const app = express()

;(async ()=>{
    try{
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',() =>{
            console.log("ERROR app not able to connect DB",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error){
        console.error("Error: ",error)
        throw err
    }
})()
    */