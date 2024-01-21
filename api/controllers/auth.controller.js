import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    //handle error : no data or blanks (Schema will handle it too)
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: "All fields are required" });
    }

    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating new model from User Schema
    const newUser = new User({
        username,
        email,
        password : hashedPassword,
    });
    
    //save to database
    try {
        await newUser.save();
        res.status(200).send("Data saved");
    } catch (error) {
        res.status(500).json({message : error.message});
    }
    
    
};

export {signup};