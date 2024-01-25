import mongoose from "mongoose";

// Creating User Schema Here
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "https://wallpapercave.com/wp/wp10142854.jpg",
    },
  },
  { timestamps: true }
);

//creating model
const User = mongoose.model("User", userSchema);

//exporting the model
export default User;