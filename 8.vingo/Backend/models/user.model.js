import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      requried: true,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
    },
    password: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    role: {
      type: String,
      enum: ["user", "owner", "deliveryBoy"],
      requried: true,
    },
  },
  { timestampus: true }
);

const User = mongoose.model("User", userSchema);

export default User;

