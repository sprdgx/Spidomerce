import mongoose from "mongoose";

export async function initMongooose() {
    if (mongoose.connection.readyState === 1 ) {
        return mongoose.connection.asPromise();
    }
    mongoose.set('strictQuery', false);
return await mongoose.connect(process.env.MONGODB_URL);
}