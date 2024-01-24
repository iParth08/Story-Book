import jwt from "jsonwebtoken";

// secret encryption cookie for authentication of user
export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}