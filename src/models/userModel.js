import mongoose,{Schema} from "mongoose"


const userSchema = new Schema({
    fullname:{
        type:String,
        required:true,
        index:true
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
         
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,// cloudinary service url
        required:true
    },
    coverImage:{
        type:String,
    },
    watchHistory:[{
        type: Schema.Types.ObjectId,
        ref:"Video",
    }]

},{timestamps:true})

// const User = module.exports("User",userSchema)
export const User = mongoose.model("User",userSchema)