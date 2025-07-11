import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express();
app.use(cors())

// app.use(cors({
//     origin: process.env.CORS_ORINGIN,
//     credentials: true
// }))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extendend:true}))
app.use(express.static("public"))
app.use(cookieparser()) 
app.use(cors())

export {app} 