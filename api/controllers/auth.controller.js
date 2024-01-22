import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  //handle error : no data or blanks (Schema will handle it too)
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "Please fill all the fields"));
  }

  //hashing the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  //creating new model from User Schema
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  //save to database
  try {
    await newUser.save();
    res.status(200).send({message : "Data saved"});
  } catch (error) {
    next(error);
  }
};

export { signup };
