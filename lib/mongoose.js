
import mongoose from "mongoose";

export async function initMongooose() {
    mongoose.set('strictQuery', false);
return await mongoose.connect(process.env.MONGODB_URI);
}