import express from "express";
import { signup, signin, googleAuth } from "../controllers/auth.controller.js";

const router = express.Router();

//sending data-body
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", googleAuth);

export default router;