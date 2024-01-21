import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//TODO: USE ENVIRONMENT VARIABLES
dotenv.config();

const mongopass = process.env.MONGOPASS;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
