import mongoose from "mongoose";
import 'dotenv/config'
export async function connect ()
{
   try {
     mongoose.connect(process.env.MONGODB_URI!)
    const connection=mongoose.connection;
    connection.on('connected',()=>{
        console.log("Mongodb connected successfully!");
        
    })
    connection.on('error',(err)=>{
        console.log("Mongodb connection error",err);
        process.exit();
        
    })


   } catch (error) {
    console.log("Error while connecting to Database");
    console.log(error);
    
    
    
   }
}