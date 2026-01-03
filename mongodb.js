// bkegOMY0RWl3eIjB
import mongoose from "mongoose";

const connectDB=async()=>{
   mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb")
   })
   await mongoose.connect(`${process.env.MONGODB_URL}/form`)
} 

export default connectDB