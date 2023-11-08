import mongoose from "mongoose";

export const connect=async ()=>{
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/passwordManager');
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
}
mongoose.connection.on("disconnected",()=>{console.log('mongodb connection failed');})
