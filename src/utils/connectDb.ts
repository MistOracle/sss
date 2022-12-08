import Mongoose from "mongoose";

Mongoose.set('strictQuery', true);

const connectDB = ()=>Mongoose.connect(process.env.MONGO_URI!);

export default connectDB;