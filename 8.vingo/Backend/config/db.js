import mongoose from "mongoose";

const connectDb = async(req,res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL );
    console.log("DB connected")
  } catch (error) {
    console.log("error db");
  }
};

export default connectDb;
