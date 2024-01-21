import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

//sending data-body
router.post("/signup", signup);

export default router;