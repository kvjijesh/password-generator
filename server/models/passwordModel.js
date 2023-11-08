import mongoose from "mongoose";

const passwordSchema= new mongoose.Schema({
    password:{
        type:String
    }
})

export default mongoose.model("Password",passwordSchema)