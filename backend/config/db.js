import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Successfull connected to mongodb");
    }
    catch(error){
        console.log("❌ Cannot connect to mongodb",error);
        process.exit(1);
    }
}