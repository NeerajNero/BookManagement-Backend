import mongoose from "mongoose";

export const initializeDatabase = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connection to DB sucessfull")
    }catch(error){
        console.log("unable to connect to DB")
    }
}