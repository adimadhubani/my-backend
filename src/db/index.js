import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const CONNECTDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb Connected !! DB HOST:${connectionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB CONNECTION ERORR",error);
        process.exit(1)
    }
}

export default CONNECTDB