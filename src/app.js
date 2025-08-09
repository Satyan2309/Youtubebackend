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


export {app}