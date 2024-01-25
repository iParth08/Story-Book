import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";
import { generateToken } from "../utils/generateToken.js";

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
    res.status(200).send({ message: "Data saved" });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  //check if fields are blank
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "Please fill all the fields"));
  }

  //try searching user and verify password
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Invalid Credentials"));
    }

    //compare password after decrypting
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Credentials"));
    }

    //generate authentication token
    const token = generateToken(validUser._id);

    //separating password and rest from validUser
    const { password: hashedPassword, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ message: "Login Successful", user: rest, access_token: token });
  } catch (error) {
    next(error);
  }
};

const googleAuth = async (req, res, next) => {
  const { name, email, googlePhoto } = req.body;

  try {
    //find if user already exists
    const user = await User.findOne({ email });
    if (user) {
      const token = generateToken(user._id);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json({ message: "Welcome Back", user: rest, access_token: token });
    }
    //  create new user with a auto-generated strong password
    else {
      //generate strong password
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        name +
        Math.random().toString(36).slice(-8);

      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

      //create new user from User Schema
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePic: googlePhoto,
      });

      //save into database
      await newUser.save();

      //generate authentication token
      const token = generateToken(newUser._id);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json({ message: "Successful Login", user: rest, access_token: token });
    }
  } catch (error) {
    next(error);
  }
};

export { signup, signin, googleAuth };
