import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

//TODO: USE ENVIRONMENT VARIABLES
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });


// creating backend server
const app = express();

// Middleware to parse json
app.use(express.json());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// test apis : use(base_url, route_name)
app.use("/api/user", userRoutes);
