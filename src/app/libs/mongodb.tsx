import mongoose from "mongoose";
import { environment } from "../environment/environment";

export const connectMongoDB = async () => {
  try {
    const uri = environment.MONGODB_URI;
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB :", error);
  }
};
