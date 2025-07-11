import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from "dotenv"

// dotenv.config({path:"../../.env"})

console.log("Mongo URI:",process.env.MONGODB_URI);

const dbconnection = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(connectionInstance.connection.host)
    } catch (error) {
        console.log("MongoDB error:",error)
    }
}

export default dbconnection
