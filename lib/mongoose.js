
import mongoose from "mongoose";

export async function initMongooose() {
return await mongoose.connect(process.env.MONGODB_URI);
}