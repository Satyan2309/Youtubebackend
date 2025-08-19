import express from "express"
import cors from'cors'
import cookieParser from "cookie-parser"
import { trusted } from "mongoose"

const app = express()

app.use((cors({
    origin :process.env.CORS_ORIGIN,
    credentials:trusted
})))

app.use(express.json({limit :"20kb"}))
app.use(express.urlencoded({extended :true, limit : "20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from "./routes/user.routes.js"



//routes declaration

app.use("/api/v1/users",userRouter)


export {app}