import dotenv from "dotenv"
import dbconnection from "./db/dbindex.js"
import {app} from './app.js'

dotenv.config({
    path: './.env'
})


dbconnection()

.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server in running at:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB Fail:",error)
})

/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log("error:",error)
    }
})()
*/

app.listen(process.env.PORT,()=>{
    console.log(`App is running on Port:${process.env.PORT}`)
})

